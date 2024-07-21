class UserModelDomain {
    
    private userId: string
    private name: string
    private surname: string

    constructor(userId: string, name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(surname: string): void {
        this.surname = surname;
    }
}

export {
    UserModelDomain
}