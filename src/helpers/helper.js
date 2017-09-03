let helper = {
  getDateToday: function() {
    const dohvatiDanasnjiDatum = new Date();
    const danasnjiDatum = `${dohvatiDanasnjiDatum.getFullYear()}-${(dohvatiDanasnjiDatum.getMonth() + 1)}-${dohvatiDanasnjiDatum.getDate()}`;

    return danasnjiDatum;
  },
  getDateAfterX: function() {
    const dohvatiDanasnjiDatum = new Date();
    const datumPrijeXDanaManje = new Date().setDate(dohvatiDanasnjiDatum.getDate()-30);
    const datumPrijeXDana = new Date(datumPrijeXDanaManje);

    return `${datumPrijeXDana.getFullYear()}-${(datumPrijeXDana.getMonth() + 1)}-${datumPrijeXDana.getDate()}`;
  }

}

export default helper;
