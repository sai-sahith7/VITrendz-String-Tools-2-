function trial()
{
  stylingresults();
  var s = document.getElementById('s').value;
  var p = s.length;
  var q = ""
  var uc=0,lc=0,wc=0,dc=0,vc=0,cc=0;
  for(let i =0;i<p;i++)
  {
    if (s[i] == " ")
    wc++;
    else if (isNaN(s[i]) == false)
    dc++;
    if (isLetter(s[i]))
    {
    if (s[i] == s[i].toUpperCase())
    uc++;
    else if (s[i] == s[i].toLowerCase())
    lc++;
    if (isVowel(s[i]) == true)
    vc++;
    if (isVowel(s[i]) == false)
    cc++;
    }
  }
  if((vc+cc)!=(uc+lc))
  cc = uc+lc-vc;
  document.getElementById('a').innerHTML = "No. of Upper Case Characters ----------->     "+ uc.toString();
  document.getElementById('a1').innerHTML = "No. of Lower Case Characters ----------->     " + lc.toString();
  document.getElementById('a2').innerHTML = "Number of Digits in String ----------->     " + dc.toString();
  document.getElementById('a3').innerHTML = "Number of Vowels in String ----------->     " + vc.toString();
  document.getElementById('a4').innerHTML = "Number of Consonants in String ----------->     " + cc.toString();
}

function isVowel(c1)
{
  var vowels = new Array("a","e","i","o","u");
  var check = false;
  for(let i=0;i<5;i++)
  {
    if(vowels[i] == c1.toLowerCase())
    check = true;
  }
  return check;
}

function isLetter(c1) {
  return (/[a-zA-Z]/).test(c1);
}
function stylingresults()
{
  document.getElementById('res').style.padding = "10px";
  document.getElementById('res').style.backgroundColor = "rgb(0,0,0,0.7)";
  document.getElementById('res').style.display = "block";
  document.getElementById('res').style.textAlign = "center";
  document.getElementById('res').style.width = "25em";
  document.getElementById('res').style.position = "relative";
  document.getElementById('res').style.margin = "auto";

}
