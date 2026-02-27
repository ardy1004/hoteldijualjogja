/**
 * Meta Pixel Utility for React + Vite SPA
 * 
 * This module provides type-safe wrapper functions for Meta Pixel (fbq) events.
 * It handles SPA route tracking and custom event firing.
 * 
 * Pixel ID: 1749426109369910
 */

// Declare fbq on window
declare global {
  interface Window {
    fbq: (
      command: 'init' | 'track' | 'trackSingle' | 'trackSingleCustom',
      pixelId?: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq: unknown;
  }
}

const PIXEL_ID = '1749426109369910';

/**
 * Initialize Meta Pixel
 * Call this once on app mount
 */
export function initMetaPixel(): void {
  if (typeof window === 'undefined') return;
  
  // Check if fbq is already loaded
  if (window.fbq) {
    console.log('[MetaPixel] Initializing pixel:', PIXEL_ID);
    window.fbq('init', PIXEL_ID);
  } else {
    console.warn('[MetaPixel] fbq not loaded yet');
  }
}

/**
 * Track a standard Meta event
 * @param eventName - Standard event name (PageView, Lead, Purchase, etc.)
 * @param params - Optional event parameters
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  
  if (window.fbq) {
    console.log(`[MetaPixel] Tracking event: ${eventName}`, params);
    window.fbq('track', eventName, params);
  } else {
    console.warn('[MetaPixel] fbq not available for event:', eventName);
  }
}

/**
 * Track PageView event
 * Call this on route changes in SPA
 */
export function trackPageView(): void {
  trackEvent('PageView');
}

/**
 * Track Lead event
 * Call this when a user submits a lead form
 * @param params - Lead-specific parameters (value, currency, etc.)
 */
export function trackLead(params?: Record<string, unknown>): void {
  trackEvent('Lead', params);
}

/**
 * Track Custom Lead event (QualifiedLead)
 * Use this for more specific lead qualification tracking
 * @param params - Custom parameters for lead qualification
 */
export function trackQualifiedLead(params?: Record<string, unknown>): void {
  // For custom events, we use 'track' with event name
  if (typeof window === 'undefined') return;
  
  if (window.fbq) {
    console.log('[MetaPixel] Tracking QualifiedLead:', params);
    // Custom events use track with event name as first param after 'track'
    window.fbq('track', 'QualifiedLead', params);
  } else {
    console.warn('[MetaPixel] fbq not available for QualifiedLead');
  }
}

/**
 * Track Lead with full data from form submission
 * @param formData - Form data from lead submission
 */
export function trackLeadSubmission(formData: {
  name: string;
  region: string;
  whatsapp: string;
  paymentPlan: string;
}): void {
  // Track standard Lead event
  trackLead({
    content_name: 'Lead Form Submission',
    content_category: 'Investment Inquiry',
    value: 0, // No monetary value for lead
    currency: 'IDR',
    region: formData.region,
    payment_plan: formData.paymentPlan,
  });
  
  // Also track as QualifiedLead for custom tracking
  trackQualifiedLead({
    lead_type: 'investment_inquiry',
    source: 'website_form',
    name: formData.name,
    region: formData.region,
    whatsapp: formData.whatsapp,
    payment_plan: formData.paymentPlan,
    timestamp: new Date().toISOString(),
  });
}
