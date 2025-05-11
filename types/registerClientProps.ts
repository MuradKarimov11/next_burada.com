import { User } from "@prisma/client";

export interface RegisterClientProps {
  currentUser: User | null | undefined;
}
