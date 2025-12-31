"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { sendContactMessage } from "@/lib/server-functions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Jméno musí obsahovat alespoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Zadejte platnou e-mailovou adresu.",
  }),
  message: z.string().min(10, {
    message: "Zpráva musí obsahovat alespoň 10 znaků.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      await sendContactMessage({ data: values });
      setSubmitMessage({
        type: "success",
        text: "Děkujeme za vaši zprávu! Brzy se vám ozveme.",
      });
      form.reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Nastala chyba při odesílání zprávy.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="kontakt"
      className="py-24 relative overflow-hidden bg-neutral-100"
    >
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Začněte svou{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              transformaci
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mt-4">
            Máte dotaz nebo projekt, na kterém byste chtěli spolupracovat?
            Neváhejte nás kontaktovat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-neutral-900">
                Kontaktní informace
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-sky-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">E-mail</p>
                    <p className="text-neutral-600">info@datovee.cz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-sky-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Telefon</p>
                    <a
                      href="tel:+420720353874"
                      className="text-neutral-600 hover:text-sky-600 transition-colors"
                    >
                      +420 720 353 874
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-sky-600 mt-1" />
                  <div>
                    <p className="font-medium text-neutral-900">Adresa</p>
                    <p className="text-neutral-600">Praha, Česká republika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jméno</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-background"
                          placeholder="Vaše jméno"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="bg-background"
                          placeholder="vas@email.cz"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zpráva</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Vaše zpráva..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {submitMessage && (
                  <div
                    className={`p-4 rounded-md ${
                      submitMessage.type === "success"
                        ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 border-0 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
