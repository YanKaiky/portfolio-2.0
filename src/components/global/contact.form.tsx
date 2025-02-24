"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { submitContactForm } from "../../app/actions";

export const ContactForm = () => {
  const t = useTranslations("contactForm");

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setPending(true);
    try {
      const response = await submitContactForm(formData);
      setMessage(response.message);
    } catch (error) {
      console.error(error);

      setMessage("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="p-6 rounded-2xl">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("name")}
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {t("message")}
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#00467F] to-[#00bf8f] font-bold text-white"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p className="text-sm text-center mt-4 text-muted-foreground">
            {message}
          </p>
        )}
      </form>
    </Card>
  );
};
