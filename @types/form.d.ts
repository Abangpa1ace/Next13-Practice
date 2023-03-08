import { InputHTMLAttributes } from "react";
import { InputKeys } from "../constants/form";

declare global {
  interface FormerInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: InputKeys;
    title?: string;
    errors?: ErrorTypeKey[];
  }
}