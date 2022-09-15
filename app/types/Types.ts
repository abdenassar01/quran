type Juz = {
    index: string,
    verse: {
        start: string,
        end: string
    }
}

export type Surah = {
    place: string,
    type: string,
    count: number,
    title: string,
    titleAr: string,
    index: string,
    pages: string,
    juz: Juz[]
} 

export type CartProp = {
    nbr: string,
    name: string,
    nameTr: string,
    nameAr: string,
    numberOfAyah: number
}
 
export type SurahDetails = {

    index: string,
    name: string,
    verse: {},
    count: number,
    juz: [
        {
            index: string,
            verse: {
                start: string,
                end: string
            }
        }
    ]

}