import { User } from "@prisma/client";

export interface LoginClientProps {
  currentUser: User | null | undefined;
}
