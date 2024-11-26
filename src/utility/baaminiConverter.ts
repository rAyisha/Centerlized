export function convertToTamil(b:string) {
  if(b)
  return (
    (b = b.replace(/sp/g, "ளி")),
    (b = b.replace(/hp/g, "ரி")),
    (b = b.replace(/hP/g, "ரீ")),
    (b = b.replace(/uP/g, "ரீ")),
    (b = b.replace(/u;/g, "ர்")),
    (b = b.replace(/h;/g, "ர்")),
    (b = b.replace(/H/g, "ர்")),
    (b = b.replace(/nfs/g, "கௌ")),
    (b = b.replace(/Nfh/g, "கோ")),
    (b = b.replace(/nfh/g, "கொ")),
    (b = b.replace(/fh/g, "கா")),
    (b = b.replace(/fp/g, "கி")),
    (b = b.replace(/fP/g, "கீ")),
    (b = b.replace(/F/g, "கு")),
    (b = b.replace(/\$/g, "கூ")),
    (b = b.replace(/nf/g, "கெ")),
    (b = b.replace(/Nf/g, "கே")),
    (b = b.replace(/if/g, "கை")),
    (b = b.replace(/f;/g, "க்")),
    (b = b.replace(/f/g, "க")),
    (b = b.replace(/nqs/g, "ஙௌ")),
    (b = b.replace(/Nqh/g, "ஙோ")),
    (b = b.replace(/nqh/g, "ஙொ")),
    (b = b.replace(/qh/g, "ஙா")),
    (b = b.replace(/qp/g, "ஙி")),
    (b = b.replace(/qP/g, "ஙீ")),
    (b = b.replace(/nq/g, "ஙெ")),
    (b = b.replace(/Nq/g, "ஙே")),
    (b = b.replace(/iq/g, "ஙை")),
    (b = b.replace(/q;/g, "ங்")),
    (b = b.replace(/q/g, "ங")),
    (b = b.replace(/nrs/g, "சௌ")),
    (b = b.replace(/Nrh/g, "சோ")),
    (b = b.replace(/nrh/g, "சொ")),
    (b = b.replace(/rh/g, "சா")),
    (b = b.replace(/rp/g, "சி")),
    (b = b.replace(/rP/g, "சீ")),
    (b = b.replace(/R/g, "சு")),
    (b = b.replace(/#/g, "சூ")),
    (b = b.replace(/nr/g, "செ")),
    (b = b.replace(/Nr/g, "சே")),
    (b = b.replace(/ir/g, "சை")),
    (b = b.replace(/r;/g, "ச்")),
    (b = b.replace(/r/g, "ச")),
    (b = b.replace(/n\[s/g, "ஜௌ")),
    (b = b.replace(/N\[h/g, "ஜோ")),
    (b = b.replace(/n\[h/g, "ஜொ")),
    (b = b.replace(/\[h/g, "ஜா")),
    (b = b.replace(/\[p/g, "ஜி")),
    (b = b.replace(/\[P/g, "ஜீ")),
    (b = b.replace(/\[{/g, "ஜு")),
    (b = b.replace(/\[_/g, "ஜூ")),
    (b = b.replace(/n\[/g, "ஜெ")),
    (b = b.replace(/N\[/g, "ஜே")),
    (b = b.replace(/i\[/g, "ஜை")),
    (b = b.replace(/\[;/g, "ஜ்")),
    (b = b.replace(/\[/g, "ஜ")),
    (b = b.replace(/nQs/g, "ஞௌ")),
    (b = b.replace(/NQh/g, "ஞோ")),
    (b = b.replace(/nQh/g, "ஞொ")),
    (b = b.replace(/Qh/g, "ஞா")),
    (b = b.replace(/Qp/g, "ஞி")),
    (b = b.replace(/QP/g, "ஞீ")),
    (b = b.replace(/nQ/g, "ஞெ")),
    (b = b.replace(/NQ/g, "ஞே")),
    (b = b.replace(/iQ/g, "ஞை")),
    (b = b.replace(/Q;/g, "ஞ்")),
    (b = b.replace(/Q/g, "ஞ")),
    (b = b.replace(/nls/g, "டௌ")),
    (b = b.replace(/Nlh/g, "டோ")),
    (b = b.replace(/nlh/g, "டொ")),
    (b = b.replace(/lp/g, "டி")),
    (b = b.replace(/lP/g, "டீ")),
    (b = b.replace(/lh/g, "டா")),
    (b = b.replace(/b/g, "டி")),
    (b = b.replace(/B/g, "டீ")),
    (b = b.replace(/L/g, "டு")),
    (b = b.replace(/\^/g, "டூ")),
    (b = b.replace(/nl/g, "டெ")),
    (b = b.replace(/Nl/g, "டே")),
    (b = b.replace(/il/g, "டை")),
    (b = b.replace(/l;/g, "ட்")),
    (b = b.replace(/l/g, "ட")),
    (b = b.replace(/nzs/g, "ணௌ")),
    (b = b.replace(/Nzh/g, "ணோ")),
    (b = b.replace(/nzh/g, "ணொ")),
    (b = b.replace(/zh/g, "ணா")),
    (b = b.replace(/zp/g, "ணி")),
    (b = b.replace(/zP/g, "ணீ")),
    (b = b.replace(/Zh/g, "ணூ")),
    (b = b.replace(/Z}/g, "ணூ")),
    (b = b.replace(/nz/g, "ணெ")),
    (b = b.replace(/Nz/g, "ணே")),
    (b = b.replace(/iz/g, "ணை")),
    (b = b.replace(/z;/g, "ண்")),
    (b = b.replace(/Z/g, "ணு")),
    (b = b.replace(/z/g, "ண")),
    (b = b.replace(/njs/g, "தௌ")),
    (b = b.replace(/Njh/g, "தோ")),
    (b = b.replace(/njh/g, "தொ")),
    (b = b.replace(/jh/g, "தா")),
    (b = b.replace(/jp/g, "தி")),
    (b = b.replace(/jP/g, "தீ")),
    (b = b.replace(/Jh/g, "தூ")),
    (b = b.replace(/Jh/g, "தூ")),
    (b = b.replace(/J}/g, "தூ")),
    (b = b.replace(/J/g, "து")),
    (b = b.replace(/nj/g, "தெ")),
    (b = b.replace(/Nj/g, "தே")),
    (b = b.replace(/ij/g, "தை")),
    (b = b.replace(/j;/g, "த்")),
    (b = b.replace(/j/g, "த")),
    (b = b.replace(/nes/g, "நௌ")),
    (b = b.replace(/Neh/g, "நோ")),
    (b = b.replace(/neh/g, "நொ")),
    (b = b.replace(/eh/g, "நா")),
    (b = b.replace(/ep/g, "நி")),
    (b = b.replace(/eP/g, "நீ")),
    (b = b.replace(/E}/g, "நூ")),
    (b = b.replace(/Eh/g, "நூ")),
    (b = b.replace(/E/g, "நு")),
    (b = b.replace(/ne/g, "நெ")),
    (b = b.replace(/Ne/g, "நே")),
    (b = b.replace(/ie/g, "நை")),
    (b = b.replace(/e;/g, "ந்")),
    (b = b.replace(/e/g, "ந")),
    (b = b.replace(/nds/g, "னௌ")),
    (b = b.replace(/Ndh/g, "னோ")),
    (b = b.replace(/ndh/g, "னொ")),
    (b = b.replace(/dh/g, "னா")),
    (b = b.replace(/dp/g, "னி")),
    (b = b.replace(/dP/g, "னீ")),
    (b = b.replace(/D}/g, "னூ")),
    (b = b.replace(/Dh/g, "னூ")),
    (b = b.replace(/D/g, "னு")),
    (b = b.replace(/nd/g, "னெ")),
    (b = b.replace(/Nd/g, "னே")),
    (b = b.replace(/id/g, "னை")),
    (b = b.replace(/d;/g, "ன்")),
    (b = b.replace(/d/g, "ன")),
    (b = b.replace(/ngs/g, "பௌ")),
    (b = b.replace(/Ngh/g, "போ")),
    (b = b.replace(/ngh/g, "பொ")),
    (b = b.replace(/gh/g, "பா")),
    (b = b.replace(/gp/g, "பி")),
    (b = b.replace(/gP/g, "பீ")),
    (b = b.replace(/G/g, "பு")),
    (b = b.replace(/ng/g, "பெ")),
    (b = b.replace(/Ng/g, "பே")),
    (b = b.replace(/ig/g, "பை")),
    (b = b.replace(/g;/g, "ப்")),
    (b = b.replace(/g/g, "ப")),
    (b = b.replace(/nks/g, "மௌ")),
    (b = b.replace(/Nkh/g, "மோ")),
    (b = b.replace(/nkh/g, "மொ")),
    (b = b.replace(/kh/g, "மா")),
    (b = b.replace(/kp/g, "மி")),
    (b = b.replace(/kP/g, "மீ")),
    (b = b.replace(/K/g, "மு")),
    (b = b.replace(/%/g, "மூ")),
    (b = b.replace(/nk/g, "மெ")),
    (b = b.replace(/Nk/g, "மே")),
    (b = b.replace(/ik/g, "மை")),
    (b = b.replace(/k;/g, "ம்")),
    (b = b.replace(/k/g, "ம")),
    (b = b.replace(/nas/g, "யௌ")),
    (b = b.replace(/Nah/g, "யோ")),
    (b = b.replace(/nah/g, "யொ")),
    (b = b.replace(/ah/g, "யா")),
    (b = b.replace(/ap/g, "யி")),
    (b = b.replace(/aP/g, "யீ")),
    (b = b.replace(/A/g, "யு")),
    (b = b.replace(/A+/g, "யூ")),
    (b = b.replace(/na/g, "யெ")),
    (b = b.replace(/Na/g, "யே")),
    (b = b.replace(/ia/g, "யை")),
    (b = b.replace(/a;/g, "ய்")),
    (b = b.replace(/a/g, "ய")),
    (b = b.replace(/nus/g, "ரௌ")),
    (b = b.replace(/Nuh/g, "ரோ")),
    (b = b.replace(/nuh/g, "ரொ")),
    (b = b.replace(/uh/g, "ரா")),
    (b = b.replace(/up/g, "ரி")),
    (b = b.replace(/U/g, "ரு")),
    (b = b.replace(/&/g, "ரூ")),
    (b = b.replace(/nu/g, "ரெ")),
    (b = b.replace(/Nu/g, "ரே")),
    (b = b.replace(/iu/g, "ரை")),
    (b = b.replace(/u/g, "ர")),
    (b = b.replace(/nys/g, "லௌ")),
    (b = b.replace(/Nyh/g, "லோ")),
    (b = b.replace(/nyh/g, "லொ")),
    (b = b.replace(/yh/g, "லா")),
    (b = b.replace(/yp/g, "லி")),
    (b = b.replace(/yP/g, "லீ")),
    (b = b.replace(/Yh/g, "லூ")),
    (b = b.replace(/Y}/g, "லூ")),
    (b = b.replace(/Y/g, "லு")),
    (b = b.replace(/ny/g, "லெ")),
    (b = b.replace(/Ny/g, "லே")),
    (b = b.replace(/iy/g, "லை")),
    (b = b.replace(/y;/g, "ல்")),
    (b = b.replace(/y/g, "ல")),
    (b = b.replace(/nss/g, "ளௌ")),
    (b = b.replace(/Nsh/g, "ளோ")),
    (b = b.replace(/nsh/g, "ளொ")),
    (b = b.replace(/sh/g, "ளா")),
    (b = b.replace(/sP/g, "ளீ")),
    (b = b.replace(/Sh/g, "ளூ")),
    (b = b.replace(/S/g, "ளு")),
    (b = b.replace(/ns/g, "ளெ")),
    (b = b.replace(/Ns/g, "ளே")),
    (b = b.replace(/is/g, "ளை")),
    (b = b.replace(/s;/g, "ள்")),
    (b = b.replace(/s/g, "ள")),
    (b = b.replace(/Nth/g, "வோ")),
    (b = b.replace(/nth/g, "வொ")),
    (b = b.replace(/th/g, "வா")),
    (b = b.replace(/tp/g, "வி")),
    (b = b.replace(/tP/g, "வீ")),
    (b = b.replace(/nt/g, "வெ")),
    (b = b.replace(/Nt/g, "வே")),
    (b = b.replace(/it/g, "வை")),
    (b = b.replace(/t;/g, "வ்")),
    (b = b.replace(/t/g, "வ")),
    (b = b.replace(/noo/g, "ழௌ")),
    (b = b.replace(/Noh/g, "ழோ")),
    (b = b.replace(/noh/g, "ழொ")),
    (b = b.replace(/oh/g, "ழா")),
    (b = b.replace(/op/g, "ழி")),
    (b = b.replace(/oP/g, "ழீ")),
    (b = b.replace(/\*/g, "ழூ")),
    (b = b.replace(/O/g, "ழு")),
    (b = b.replace(/no/g, "ழெ")),
    (b = b.replace(/No/g, "ழே")),
    (b = b.replace(/io/g, "ழை")),
    (b = b.replace(/o;/g, "ழ்")),
    (b = b.replace(/o/g, "ழ")),
    (b = b.replace(/nws/g, "றௌ")),
    (b = b.replace(/Nwh/g, "றோ")),
    (b = b.replace(/nwh/g, "றொ")),
    (b = b.replace(/wh/g, "றா")),
    (b = b.replace(/wp/g, "றி")),
    (b = b.replace(/wP/g, "றீ")),
    (b = b.replace(/Wh/g, "றூ")),
    (b = b.replace(/W}/g, "றூ")),
    (b = b.replace(/W/g, "று")),
    (b = b.replace(/nw/g, "றெ")),
    (b = b.replace(/Nw/g, "றே")),
    (b = b.replace(/iw/g, "றை")),
    (b = b.replace(/w;/g, "ற்")),
    (b = b.replace(/w/g, "ற")),
    (b = b.replace(/n``/g, "ஹௌ")),
    (b = b.replace(/N`h/g, "ஹோ")),
    (b = b.replace(/n`h/g, "ஹொ")),
    (b = b.replace(/`h/g, "ஹா")),
    (b = b.replace(/`p/g, "ஹி")),
    (b = b.replace(/`P/g, "ஹீ")),
    (b = b.replace(/n`/g, "ஹெ")),
    (b = b.replace(/N`/g, "ஹே")),
    (b = b.replace(/i`/g, "ஹை")),
    (b = b.replace(/`;/g, "ஹ்")),
    (b = b.replace(/`/g, "ஹ")),
    (b = b.replace(/n\\s/g, "ஷௌ")),
    (b = b.replace(/N\\h/g, "ஷோ")),
    (b = b.replace(/n\\h/g, "ஷொ")),
    (b = b.replace(/\\h/g, "ஷா")),
    (b = b.replace(/\\p/g, "ஷி")),
    (b = b.replace(/\\P/g, "ஷீ")),
    (b = b.replace(/n\\/g, "ஷெ")),
    (b = b.replace(/N\\/g, "ஷே")),
    (b = b.replace(/i\\/g, "ஷை")),
    (b = b.replace(/\\;/g, "ஷ்")),
    (b = b.replace(/\\/g, "ஷ")),
    (b = b.replace(/n]s/g, "ஸௌ")),
    (b = b.replace(/N]h/g, "ஸோ")),
    (b = b.replace(/n]h/g, "ஸொ")),
    (b = b.replace(/]h/g, "ஸா")),
    (b = b.replace(/]p/g, "ஸி")),
    (b = b.replace(/]P/g, "ஸீ")),
    (b = b.replace(/n]/g, "ஸெ")),
    (b = b.replace(/N]/g, "ஸே")),
    (b = b.replace(/i]/g, "ஸை")),
    (b = b.replace(/];/g, "ஸ்")),
    (b = b.replace(/]/g, "ஸ")),
    (b = b.replace(/>/g, "ää")),
    (b = b.replace(/m/g, "அ")),
    (b = b.replace(/M/g, "ஆ")),
    (b = b.replace(/</g, "ஈ")),
    (b = b.replace(/c/g, "உ")),
    (b = b.replace(/C/g, "ஊ")),
    (b = b.replace(/v/g, "எ")),
    (b = b.replace(/V/g, "ஏ")),
    (b = b.replace(/I/g, "ஐ")),
    (b = b.replace(/x/g, "ஒ")),
    (b = b.replace(/X/g, "ஓ")),
    (b = b.replace(/xs/g, "ஔ")),
    (b = b.replace(/\//g, "ஃ")),
    (b = b.replace(/,/g, "இ")),
    (b = b.replace(/=/g, "ஸ்ரீ")),
    (b = b.replace(/>/g, ",")),
    (b = b.replace(/T/g, "வு")),
    (b = b.replace(/ää/g, ",")),
    (b = b.replace(/வு\+/g, "வூ")),
    (b = b.replace(/பு\+/g, "பூ")),
    (b = b.replace(/யு\+/g, "யூ")),
    (b = b.replace(/சு\+/g, "சூ")),
    (b = b.replace(/\+/g, "ூ")),
    (b = b.replace(/\@/g, ";"))
  );
}
