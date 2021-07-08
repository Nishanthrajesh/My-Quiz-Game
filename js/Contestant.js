class Contestant 
{
  constructor()
  {
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount()
  {
    var contestantCountRef = data_base.ref('contestantCount');
    contestantCountRef.on("value",(data)=>
    {
      contestantCount = data.val();
    })
  }

  updateCount(count)
  {
    data_base.ref('/').update(
      {
      contestantCount: count
      })
  }

  update()
  {
    var contestantIndex = "contestants/contestant" + this.index;
    data_base.ref(contestantIndex).set(
      {
      name:this.name,
      answer:this.answer
      })
  }

  static getPlayerInfo()
  {
    var contestantInfoRef = data_base.ref('contestants');
    contestantInfoRef.on("value",(data)=>
    {
      allContestants = data.val();
    })
  }
}
