import { db } from "./db";
import { inquiries, type CreateInquiryRequest, type InquiryResponse } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: CreateInquiryRequest): Promise<InquiryResponse>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: CreateInquiryRequest): Promise<InquiryResponse> {
    if (!db) {
      // Return mock response when database is not available
      return {
        id: Date.now(),
        ...inquiry,
        createdAt: new Date(),
      };
    }
    const [created] = await db.insert(inquiries).values(inquiry).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
