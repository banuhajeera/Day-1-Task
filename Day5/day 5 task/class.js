class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        console.log('Instance', title, studio, rating);
        

    }


    getPG() {
        if (this.rating === 'PG') {
    }
}


}


const kaththi = new movie('kaththi', 'Lyca production', ['G', 'PG', 'PG13', 'R'])
const master = new movie('master', ' Steamroller Studios', ['PG'])
const vikram = new movie('vikram', 'redjaint', ['PG'])

console.log(kaththi.getPG(),master.getPG(),vikram.getPG())