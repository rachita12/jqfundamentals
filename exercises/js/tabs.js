function Navigator(navigateThrough){
  "use strict"
  this.navigateThrough = navigateThrough;
}
Navigator.prototype = {
  /*Hide all the ".modules"*/
  hideModules : function() {
    this.navigateThrough.each(function(){
      $(this).hide();
    });
  },
  
  /*Creating unordered list before first "div.modue"*/
  createNavigationList : function() {
    this.navigateThrough.eq(0).before('<h2>Click your desired option</h2>');
    this.navigateThrough.eq(0).before('<ul id = "navNew"></ul>');
  },
  
  /*Adding elements to Navigation List*/
  addNavigationListItem : function(){
    var _this = this;
    $('.module').each(function() {
      var heading = $(this).find('h2').text();
      _this.navigateThrough.append("<li>" + heading + "</li>");
    });
  },
  
  /*Show divs when corresponding list item is clicked*/
  showWhenClicked : function() {
    this.navigateThrough.click(function(){
      var index = $(this).index();
      var countModule = $('.module').length;
      for(var i = 0; i < countModule; i++ ){
        if(i == index){
          $('.module').eq(i).show();
        }
        else{
          $('.module').eq(i).hide();
        }
      }
    });
  }
}
$(document).ready(function(){
  var step1 = new Navigator($('.module'));
  step1.hideModules();
  var step2 = new Navigator($('.module'));
  step2.createNavigationList();
  var step3 = new Navigator($('#navNew'));
  step3.addNavigationListItem();
  var step4 = new Navigator($('#navNew li'));
  step4.showWhenClicked();
});
