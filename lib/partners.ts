export interface Partner {
  id: string;
  name: string;
  nameEn?: string;
  logo?: string;
}

export const partners: Partner[] = [
  { id: "1", name: "FUTURA SEOUL" },
  { id: "2", name: "DDP" },
  {
    id: "3",
    name: "세종문화회관",
    nameEn: "Sejong Center for the Performing Arts",
  },
  { id: "4", name: "일민미술관", nameEn: "Ilmin Museum of Art" },
  { id: "5", name: "마이어트뮤지엄", nameEn: "Myart Museum" },
  { id: "6", name: "한원미술관", nameEn: "Hanwon Museum of Art" },
  { id: "7", name: "환기미술관", nameEn: "Whanki Museum" },
  { id: "8", name: "갤러리밈", nameEn: "Gallery Meme" },
  { id: "9", name: "뮤지엄 209", nameEn: "Museum 209" },
  { id: "10", name: "모다 갤러리", nameEn: "Moda Gallery" },
  { id: "11", name: "금호미술관", nameEn: "Kumho Museum of Art" },
  { id: "12", name: "아르코 미술관", nameEn: "Arko Art Center" },
  { id: "13", name: "국립중앙박물관", nameEn: "National Museum of Korea" },
  { id: "14", name: "세화미술관", nameEn: "Sehwa Museum" },
  { id: "15", name: "SONGEUN", nameEn: "SongEun Art and Cultural Foundation" },
  { id: "16", name: "김종영 미술관", nameEn: "Kim Chong Yung Museum" },
  { id: "17", name: "뮤지엄 한미", nameEn: "MUSEUM HANMI" },
  // 추가 파트너들...
];
