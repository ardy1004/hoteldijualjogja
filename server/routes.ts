import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Create inquiry and return WhatsApp URL
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      
      // Save inquiry to database for tracking
      await storage.createInquiry(input);
      
      // Construct WhatsApp URL
      const message = `Halo saya calon pembeli langsung Hotel 41 Room. Nama: ${input.name} | Asal: ${input.region} | No WA: ${input.whatsapp} | Pembayaran: ${input.paymentPlan}`;
      const whatsappUrl = `https://wa.me/6281391278889?text=${encodeURIComponent(message)}`;
      
      res.status(201).json({
        success: true,
        whatsappUrl,
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      console.error("Error creating inquiry:", err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  return httpServer;
}
