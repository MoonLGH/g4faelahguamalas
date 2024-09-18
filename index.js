import { G4F } from "g4f";

const g4f = new G4F()

async function JawabPertanyaan(Pertanyaan,Jawab,Ref) {
    const messages = [
        { role: "Rules", content: `
            Kamu Adalah Checker bagi sebuah pertanyaan
kamu hanya dapat menjawab ini dengan bentuk stringified JSON yaitu {benar:Boolean}

Pertanyaan : ${Pertanyaan}
Jawaban User : ${Jawab}
Jawaban Refrensi : ${Ref} 

Jika Kamu memiliki keraguan, boleh tambahkan key keraguan dalam Jsonnya
KAMU TIDAK DAPAT MENJAWAB SELAIN JSON, KARENA JSON AKAN SEGERA DI PARSE
`}
    ];
    let resp = await g4f.chatCompletion(messages)
    console.log(resp)
    try {
        let resParse = JSON.parse(resp)
        if(!resParse) {
            // return JawabPertanyaan(Pertanyaan,Jawab,Ref)
        }
        return resParse
    } catch (e) {
        return JawabPertanyaan(Pertanyaan,Jawab,Ref)
    }
}

JawabPertanyaan("1+1", "kayaknya 2 ga si, soalnya 1 apel tambah 1 apel itu 2", "2")