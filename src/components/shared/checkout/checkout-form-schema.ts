import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2-х символов" }),
  // lastName: z
  //   .string()
  //   .min(2, { message: "Фамилия должна содержать не менее 2-х символов" }),
  //email: z.string().email({ message: "Введите корректную почту" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  address: z.string().min(5, { message: "Введите корректный адрес" }),
  delivery: z.string().min(5, { message: "Выберите способ доставки" }),
  time: z.string().min(3, { message: "Выберите время доставки" }),
  house: z.string().min(1, { message: "Введите номер дома" }),
  flat: z.string().optional(),
  entrance: z.string().optional(),
  floor: z.string().optional(),
  comment: z.string().optional(),
});

export const deliveryFormSchema = z.object({
  address: z.string().min(5, { message: "Введите корректный адрес" }),
  delivery: z.string().min(5, { message: "Выберите способ доставки" }),
  house: z.string().min(1, { message: "Введите номер дома" }),
  flat: z.string().optional(),
  entrance: z.string().optional(),
  floor: z.string().optional(),
});

export const combinedFormSchema = checkoutFormSchema.merge(deliveryFormSchema);

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
export type deliveryFormValues = z.infer<typeof deliveryFormSchema>;
export type CombinedFormValues = z.infer<typeof combinedFormSchema>;
