export default class Validator {
    constructor(nickname) {
        this.nickname = nickname;
    }

    validateUsername() {
        const re = /^(?![-_\d])(?!.*[-_\d]$)(?!.*\d{4})[a-zA-Z0-9-_]+$/;
        return re.test(this.nickname);
    }
}
