/**
 * Meta Pixel Utility for React + Vite SPA
 * 
 * Provides safe fbq wrapper with retry logic to prevent race conditions.
 * Pixel ID: 1749426109369910
 */

declare global {
  interface Window {
    fbq: ((command: string, ...args: unknown[]) => void) | undefined;
    _fbq: unknown;
  }
}

const PIXEL_ID = '1749426109369910';
const MAX_RETRIES = 10;
const RETRY_INTERVAL_MS = 100;

/**
 * Wait for fbq to be available with retry logic
 * Returns a promise that resolves when fbq is ready
 */
function waitForFbq(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    // If fbq is already available, resolve immediately
    if (typeof window.fbq === 'function') {
      resolve();
      return;
    }

    // Retry logic
    let attempts = 0;
    const checkFbq = () => {
      attempts++;
      if (window.fbq) {
        resolve();
        return;
      }
      
      if (attempts >= MAX_RETRIES) {
        console.warn('[MetaPixel] fbq not available after max retries');
        resolve();
        return;
      }
      
      setTimeout(checkFbq, RETRY_INTERVAL_MS);
    };
    
    checkFbq();
  });
}

/**
 * Initialize Meta Pixel - call this once on app mount
 */
export async function initMetaPixel(): Promise<void> {
  await waitForFbq();
  
  if (typeof window.fbq === 'function') {
    console.log('[MetaPixel] Initializing pixel:', PIXEL_ID);
    window.fbq('init', PIXEL_ID);
  }
}

/**
 * Track PageView event - safe wrapper with retry
 */
export async function trackPageView(): Promise<void> {
  await waitForFbq();
  
  if (typeof window.fbq === 'function') {
    console.log('[MetaPixel] Tracking PageView');
    window.fbq('track', 'PageView');
  } else {
    console.warn('[MetaPixel] fbq not available for PageView');
  }
}

/**
 * Track Lead event - safe wrapper with retry
 */
export async function trackLead(params?: Record<string, unknown>): Promise<void> {
  await waitForFbq();
  
  if (typeof window.fbq === 'function') {
    console.log('[MetaPixel] Tracking Lead', params);
    // Use 'track' with custom event name for custom events
    window.fbq('track', 'Lead', params);
  } else {
    console.warn('[MetaPixel] fbq not available for Lead');
  }
}

/**
 * Track Custom QualifiedLead event - safe wrapper with retry
 */
export async function trackQualifiedLead(params?: Record<string, unknown>): Promise<void> {
  await waitForFbq();
  
  if (typeof window.fbq === 'function') {
    console.log('[MetaPixel] Tracking QualifiedLead', params);
    // Use 'track' with custom event name for custom events
    window.fbq('track', 'QualifiedLead', params);
  } else {
    console.warn('[MetaPixel] fbq not available for QualifiedLead');
  }
}

/**
 * Track lead submission with both Lead and QualifiedLead events
 * Prevents duplicate calls
 */
let leadTracked = false;

export async function trackLeadSubmission(formData: {
  name: string;
  region: string;
  whatsapp: string;
  paymentPlan: string;
}): Promise<void> {
  // Prevent duplicate tracking
  if (leadTracked) {
    console.log('[MetaPixel] Lead already tracked, skipping');
    return;
  }
  
  leadTracked = true;
  
  // Track standard Lead event
  await trackLead({
    content_name: 'Lead Form Submission',
    content_category: 'Investment Inquiry',
    value: 0,
    currency: 'IDR',
    region: formData.region,
    payment_plan: formData.paymentPlan,
  });
  
  // Track QualifiedLead for custom analytics
  await trackQualifiedLead({
    lead_type: 'investment_inquiry',
    source: 'website_form',
    name: formData.name,
    region: formData.region,
    whatsapp: formData.whatsapp,
    payment_plan: formData.paymentPlan,
    timestamp: new Date().toISOString(),
  });
}
