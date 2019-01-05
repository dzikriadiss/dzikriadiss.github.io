function tampilKota(provinsi)
{
    var kota = "";
    switch(provinsi)
    {
        case "Jateng" :
        {
            kota = "<ul><li>Semarang</li><li>Magelang</li><li>Pekalongan</li><li>Salatiga</li><li>Surakarta</li><li>Tegal</li></ul>";
        }break;
        default : kota ="";
    }
    document.getElementById('kota').innerHTML = kota;
}
