/* import { User } from "./user"; */
import { UserNotFound } from "../api/user-not-found";
import { User } from "./user";
import { UserRepository } from "./user-repository";

export class UserByIdFinder {
  constructor(private readonly userRepository: UserRepository) {}
  async run(id: string): Promise<User> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new UserNotFound(id);
    }
    return user;
  }
}
