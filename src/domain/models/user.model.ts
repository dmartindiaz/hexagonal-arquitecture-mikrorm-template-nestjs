class UserModelDomain {
    
    private _id: string
    private name: string
    private surname: string

    constructor(_id: string, name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    public getId(): string {
        return this._id;
    }

    public setId(userId: string): void {
        this._id = userId;
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