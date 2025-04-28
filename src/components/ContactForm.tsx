import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
interface FormValues {
  name: string;
  service: string;
  description: string;
}
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const {
    translations
  } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      service: "",
      description: ""
    }
  });
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to a server
      console.log("Form submitted:", data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description: "Your request has been submitted successfully."
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const services = translations.services.items;
  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-lg p-6 shadow-sm border border-gray-100 max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-4 text-neutral-950">{translations.cta.formTitle}</h3>
        
        <FormField control={form.control} name="name" rules={{
        required: "This field is required"
      }} render={({
        field
      }) => <FormItem>
              <FormLabel>{translations.cta.nameLabel}</FormLabel>
              <FormControl>
                <Input placeholder={translations.cta.namePlaceholder} {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="service" rules={{
        required: "This field is required"
      }} render={({
        field
      }) => <FormItem>
              <FormLabel className="">{translations.cta.serviceLabel}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={translations.cta.servicePlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service, index) => <SelectItem key={index} value={service.title}>
                      {service.title}
                    </SelectItem>)}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>} />
        
        <FormField control={form.control} name="description" rules={{
        required: "This field is required"
      }} render={({
        field
      }) => <FormItem>
              <FormLabel>{translations.cta.descriptionLabel}</FormLabel>
              <FormControl>
                <Textarea placeholder={translations.cta.descriptionPlaceholder} className="min-h-32" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormMessage />
            </FormItem>} />
        
        <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
          <Send className="mr-2 h-4 w-4" /> 
          {translations.cta.submitButton}
        </Button>
      </form>
    </Form>;
};
export default ContactForm;