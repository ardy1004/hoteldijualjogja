import { useMutation } from "@tanstack/react-query";
import { api, type CreateInquiryInput, type CreateInquiryResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation<CreateInquiryResponse, Error, CreateInquiryInput>({
    mutationFn: async (data) => {
      const validated = api.inquiries.create.input.parse(data);
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validasi gagal. Mohon periksa kembali data Anda.");
        }
        throw new Error("Terjadi kesalahan sistem. Silakan coba lagi.");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: (data) => {
      // API returns a constructed WhatsApp URL, we open it in a new tab
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
      
      toast({
        title: "Permintaan Terkirim",
        description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Gagal Mengirim",
        description: error.message,
      });
    },
  });
}
