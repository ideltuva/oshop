
export class UserProfile {
    uid: string;
    name: string;
    email: string;
    isAdmin: boolean;

    constructor(uid: string, name: string, email: string, isAdmin: boolean) {
        this.uid = uid,
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}