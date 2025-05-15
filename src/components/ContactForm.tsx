import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

interface FormValues {
  name: string;
  service: string;
  description: string;
  email: string;
  whatsapp: string; // Added WhatsApp field
}

const ContactForm = () => {
  const { toast } = useToast();
  const { translations } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      service: "",
      description: "",
      email: "",
      whatsapp: "", // Added WhatsApp default value
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Create form data to send to email service
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("service", data.service);
      formData.append("description", data.description);
      formData.append("email", data.email);
      formData.append("whatsapp", data.whatsapp); // Added WhatsApp to form data
      formData.append("_captcha", "false"); // Desativa o captcha
      formData.append("_template", "table"); // Estiliza o e-mail em tabela
      formData.append("_redirect", "https://dev-artx.vercel.app/"); // Evita redirecionamento do FormSubmit

      // Send form data to a service like FormSubmit
      const response = await fetch(
        "https://devartx1.app.n8n.cloud/webhook/formsubmit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast({
          title: translations.cta.successTitle || "Success!",
          description:
            translations.cta.successMessage ||
            "Your request has been submitted successfully.",
        });

        // Reset form
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: translations.cta.errorTitle || "Error",
        description:
          translations.cta.errorMessage ||
          "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get services list and add "Other" option
  const services = translations.services.items;
  const allServices = [
    ...services,
    {
      title: translations.cta.otherService || "Other",
      description: "",
      icon: "🔍",
      popular: false,
    },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-white rounded-lg p-6 shadow-lg border border-gray-100 max-w-md mx-auto"
      >
        <h3 className="text-xl font-bold mb-4 text-neutral-950">
          {translations.cta.formTitle}
        </h3>

        <FormField
          control={form.control}
          name="name"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                {translations.cta.nameLabel}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={translations.cta.namePlaceholder}
                  {...field}
                  disabled={isSubmitting}
                  className="focus:ring-blue-500 focus:border-blue-500 text-neutral-950"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                {translations.cta.emailLabel || "Email"}
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={
                    translations.cta.emailPlaceholder || "Enter your email"
                  }
                  {...field}
                  disabled={isSubmitting}
                  className="focus:ring-blue-500 focus:border-blue-500 text-neutral-950"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          rules={{
            required: "This field is required",
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Please enter a valid WhatsApp number",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                {translations.cta.whatsappLabel || "WhatsApp"}
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder={
                    translations.cta.whatsappPlaceholder ||
                    "Enter your WhatsApp number"
                  }
                  {...field}
                  disabled={isSubmitting}
                  className="focus:ring-blue-500 focus:border-blue-500 text-neutral-950"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                {translations.cta.serviceLabel}
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isSubmitting}
              >
                <FormControl>
                  <SelectTrigger className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-neutral-950">
                    <SelectValue
                      placeholder={translations.cta.servicePlaceholder}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  {allServices.map((service, index) => (
                    <SelectItem
                      key={index}
                      value={service.title}
                      className="hover:bg-blue-50"
                    >
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">
                {translations.cta.descriptionLabel}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={translations.cta.descriptionPlaceholder}
                  className="min-h-32 focus:ring-blue-500 focus:border-blue-500 text-neutral-950"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full btn-primary"
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting
            ? translations.cta.submitting || "Submitting..."
            : translations.cta.submitButton}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          {translations.cta.privacyNote ||
            "Your information will be processed according to our privacy policy."}
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
