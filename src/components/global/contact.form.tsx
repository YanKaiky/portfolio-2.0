"use client";

import { Button, Card, Input, Textarea } from "@/components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FormEvent, useRef, useState } from "react";

export const ContactForm = () => {
  const t = useTranslations("contactForm");

  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPending(true);
    setMessage("");
    setError("");

    try {
      await emailjs.sendForm(
        "service_aod43ld",
        "template_5avcxqz",
        formRef.current as HTMLFormElement,
        "ui-ePk4xUVZc_aCRt"
      );

      setMessage(t("sent"));
      setTimeout(() => setMessage(""), 3000);
    } catch (err: unknown) {
      console.error(err);

      setError("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="container mx-auto max-w-lg"
    >
      <Card className="p-6 rounded-2xl">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t("name")}
            </label>
            <Input id="name" name="name" placeholder="Yan Kaiky" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-mail
            </label>
            <Input
              id="email"
              name="email"
              placeholder="hello@example.com"
              type="email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t("message")}
            </label>
            <Textarea id="message" name="message" rows={4} required />
          </div>

          <Button
            type="submit"
            className="w-full bg-container-gradient-light dark:bg-container-gradient font-bold text-white"
            disabled={pending}
          >
            {pending ? t("sending") : t("send")}
          </Button>

          {message && (
            <p className="text-sm text-center mt-4 text-green-600">{message}</p>
          )}

          {error && (
            <p className="text-sm text-center mt-4 text-red-600">{error}</p>
          )}
        </form>
      </Card>
    </motion.div>
  );
};
