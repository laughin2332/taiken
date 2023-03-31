
    let i=0;
    alert("3桁の数を当ててみてね☆ 間違えたら…どうなるか分からないよ…？");
    let num=Math.floor(Math.random()*1000);
    alert(num);
    loop:
    let pr=prompt("数字を入力してね☆");
    if(pr==num)
      break;
    }else{
      if(pr<num){
        alert("ビビりか！もっとデケェよ！キンタマ付いてんのか！？");
        continue loop;
      }else{
        alert("馬鹿か！もっと小せぇよ！欲張りすぎだろ！欲求不満が！");
        continue loop;
      }
    }
    alert("ふっ褒めてやろう…");
