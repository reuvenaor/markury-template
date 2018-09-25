export class USERS {
    readonly ninaName = 'Nina Jones';
    readonly ninaImg = '/assets/img/Nina.png';
    readonly jamesName = 'James Smith';
    readonly jamesImg = '/assets/img/James.png';
    readonly alexName = 'Alex Clooney';
    readonly alexImg = '/assets/img/Alex.png';
    readonly alexandraName = 'Alexandra Spears';
    readonly alexandraImg = '/assets/img/Alexandra.png';

    getUserImage(key: string) {
        switch (key) {
          case this.ninaName:
            return this.ninaImg;
          case this.jamesName:
            return this.jamesImg;
          case this.alexName:
            return this.alexImg;
          case this.alexandraName:
            return this.alexandraImg;
          default:
            return this.ninaImg;
        }
    }

}

