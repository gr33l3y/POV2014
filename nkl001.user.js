// ==UserScript==
// @name        NKL001 (by gr33l3y)
// @namespace   NKL001
// @include     http://www.nakluky.cz/* 
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @version     2
// @grant       none
// ==/UserScript==

var TITLE = 'NKL001';
var INTERVAL_ONLINE_CHECK = 8000;
var INTERVAL_MESSAGE_CHECK = 15000;
var COUNTER_REGION = '<option value="0">--</option><option value="701" class="listbox_cr_stat">ČESKÁ REPUBLIKA</option><option value="501" class="listbox_cr_kraj">Jihočeský kraj</option><option value="1" class="listbox_cr_okres">České Budějovice</option><option value="2" class="listbox_cr_okres">Český Krumlov</option><option value="3" class="listbox_cr_okres">Jindřichův Hradec</option><option value="4" class="listbox_cr_okres">Písek</option><option value="5" class="listbox_cr_okres">Prachatice</option><option value="6" class="listbox_cr_okres">Strakonice</option><option value="7" class="listbox_cr_okres">Tábor</option><option value="502" class="listbox_cr_kraj">Jihomoravský kraj</option><option value="8" class="listbox_cr_okres">Blansko</option><option value="9" class="listbox_cr_okres">Brno-město</option><option value="10" class="listbox_cr_okres">Brno-venkov</option><option value="11" class="listbox_cr_okres">Břeclav</option><option value="12" class="listbox_cr_okres">Hodonín</option><option value="13" class="listbox_cr_okres">Vyškov</option><option value="14" class="listbox_cr_okres">Znojmo</option><option value="503" class="listbox_cr_kraj">Karlovarský kraj</option><option value="15" class="listbox_cr_okres">Cheb</option><option value="16" class="listbox_cr_okres">Karlovy Vary</option><option value="17" class="listbox_cr_okres">Sokolov</option><option value="504" class="listbox_cr_kraj">Královehradecký kraj</option><option value="18" class="listbox_cr_okres">Hradec Králové</option><option value="19" class="listbox_cr_okres">Jičín</option><option value="20" class="listbox_cr_okres">Náchod</option><option value="21" class="listbox_cr_okres">Rychnov nad Kněžnou</option><option value="22" class="listbox_cr_okres">Trutnov</option><option value="505" class="listbox_cr_kraj">Liberecký kraj</option><option value="23" class="listbox_cr_okres">Česká Lípa</option><option value="24" class="listbox_cr_okres">Jablonec nad Nisou</option><option value="25" class="listbox_cr_okres">Liberec</option><option value="26" class="listbox_cr_okres">Semily</option><option value="506" class="listbox_cr_kraj">Moravskoslezský kraj</option><option value="27" class="listbox_cr_okres">Bruntál</option><option value="28" class="listbox_cr_okres">Frýdek-Místek</option><option value="29" class="listbox_cr_okres">Karviná</option><option value="30" class="listbox_cr_okres">Nový Jičín</option><option value="31" class="listbox_cr_okres">Opava</option><option value="32" class="listbox_cr_okres">Ostrava</option><option value="507" class="listbox_cr_kraj">Olomoucký kraj</option><option value="33" class="listbox_cr_okres">Jeseník</option><option value="34" class="listbox_cr_okres">Olomouc</option><option value="35" class="listbox_cr_okres">Prostějov</option><option value="36" class="listbox_cr_okres">Přerov</option><option value="37" class="listbox_cr_okres">Šumperk</option><option value="508" class="listbox_cr_kraj">Pardubický kraj</option><option value="38" class="listbox_cr_okres">Chrudim</option><option value="39" class="listbox_cr_okres">Pardubice</option><option value="40" class="listbox_cr_okres">Svitavy</option><option value="41" class="listbox_cr_okres">Ústí nad Orlicí</option><option value="509" class="listbox_cr_kraj">Plzeňský kraj</option><option value="42" class="listbox_cr_okres">Domažlice</option><option value="43" class="listbox_cr_okres">Klatovy</option><option value="44" class="listbox_cr_okres">Plzeň-jih</option><option value="45" class="listbox_cr_okres">Plzeň-město</option><option value="46" class="listbox_cr_okres">Plzeň-sever</option><option value="47" class="listbox_cr_okres">Rokycany</option><option value="48" class="listbox_cr_okres">Tachov</option><option value="510" class="listbox_cr_kraj">Praha</option><option value="49" class="listbox_cr_okres">Praha 1</option><option value="50" class="listbox_cr_okres">Praha 2</option><option value="51" class="listbox_cr_okres">Praha 3</option><option value="52" class="listbox_cr_okres">Praha 4</option><option value="53" class="listbox_cr_okres">Praha 5</option><option value="54" class="listbox_cr_okres">Praha 6</option><option value="55" class="listbox_cr_okres">Praha 7</option><option value="56" class="listbox_cr_okres">Praha 8</option><option value="57" class="listbox_cr_okres">Praha 9</option><option value="58" class="listbox_cr_okres">Praha 10</option><option value="511" class="listbox_cr_kraj">Středočeský kraj</option><option value="59" class="listbox_cr_okres">Benešov</option><option value="60" class="listbox_cr_okres">Beroun</option><option value="61" class="listbox_cr_okres">Kladno</option><option value="62" class="listbox_cr_okres">Kolín</option><option value="63" class="listbox_cr_okres">Kutná Hora</option><option value="64" class="listbox_cr_okres">Mělník</option><option value="65" class="listbox_cr_okres">Mladá Boleslav</option><option value="66" class="listbox_cr_okres">Nymburk</option><option value="67" class="listbox_cr_okres">Praha-východ</option><option value="68" class="listbox_cr_okres">Praha-západ</option><option value="69" class="listbox_cr_okres">Příbram</option><option value="70" class="listbox_cr_okres">Rakovník</option><option value="512" class="listbox_cr_kraj">Ústecký kraj</option><option value="71" class="listbox_cr_okres">Děčín</option><option value="72" class="listbox_cr_okres">Chomutov</option><option value="73" class="listbox_cr_okres">Litoměřice</option><option value="74" class="listbox_cr_okres">Louny</option><option value="75" class="listbox_cr_okres">Most</option><option value="76" class="listbox_cr_okres">Teplice</option><option value="77" class="listbox_cr_okres">Ústí nad Labem</option><option value="513" class="listbox_cr_kraj">Vysočina</option><option value="78" class="listbox_cr_okres">Havlíčkův Brod</option><option value="79" class="listbox_cr_okres">Jihlava</option><option value="80" class="listbox_cr_okres">Pelhřimov</option><option value="81" class="listbox_cr_okres">Třebíč</option><option value="82" class="listbox_cr_okres">Žďár nad Sázavou</option><option value="514" class="listbox_cr_kraj">Zlínský kraj</option><option value="83" class="listbox_cr_okres">Kroměříž</option><option value="84" class="listbox_cr_okres">Uherské Hradiště</option><option value="85" class="listbox_cr_okres">Vsetín</option><option value="86" class="listbox_cr_okres">Zlín</option><option value="702" class="listbox_sk_stat">SLOVENSKÁ REPUBLIKA</option><option value="601" class="listbox_sk_kraj">Banskobystrický kraj</option><option value="201" class="listbox_sk_okres">Banská Bystrica</option><option value="202" class="listbox_sk_okres">Banská Štiavnica</option><option value="203" class="listbox_sk_okres">Brezno</option><option value="204" class="listbox_sk_okres">Detva</option><option value="205" class="listbox_sk_okres">Krupina</option><option value="206" class="listbox_sk_okres">Lučenec</option><option value="207" class="listbox_sk_okres">Poltár</option><option value="208" class="listbox_sk_okres">Revúca</option><option value="209" class="listbox_sk_okres">Rimavská Sobota</option><option value="210" class="listbox_sk_okres">Veľký Krtíš</option><option value="211" class="listbox_sk_okres">Zvolen</option><option value="212" class="listbox_sk_okres">Žarnovica</option><option value="213" class="listbox_sk_okres">Žiar nad Hronom</option><option value="602" class="listbox_sk_kraj">Bratislavský kraj</option><option value="214" class="listbox_sk_okres">Bratislava 1</option><option value="215" class="listbox_sk_okres">Bratislava 2</option><option value="216" class="listbox_sk_okres">Bratislava 3</option><option value="217" class="listbox_sk_okres">Bratislava 4</option><option value="218" class="listbox_sk_okres">Bratislava 5</option><option value="219" class="listbox_sk_okres">Malacky</option><option value="220" class="listbox_sk_okres">Pezinok</option><option value="221" class="listbox_sk_okres">Senec</option><option value="603" class="listbox_sk_kraj">Košický kraj</option><option value="222" class="listbox_sk_okres">Gelnica</option><option value="223" class="listbox_sk_okres">Košice 1</option><option value="224" class="listbox_sk_okres">Košice 2</option><option value="225" class="listbox_sk_okres">Košice 3</option><option value="226" class="listbox_sk_okres">Košice 4</option><option value="227" class="listbox_sk_okres">Košice okolie</option><option value="228" class="listbox_sk_okres">Michalovce</option><option value="229" class="listbox_sk_okres">Rožňava</option><option value="230" class="listbox_sk_okres">Sobrance</option><option value="231" class="listbox_sk_okres">Spišká Nová Ves</option><option value="232" class="listbox_sk_okres">Trebišov</option><option value="604" class="listbox_sk_kraj">Nitrianský kraj</option><option value="233" class="listbox_sk_okres">Komárno</option><option value="234" class="listbox_sk_okres">Levice</option><option value="235" class="listbox_sk_okres">Nitra</option><option value="236" class="listbox_sk_okres">Nové Zámky</option><option value="237" class="listbox_sk_okres">Šaľa</option><option value="238" class="listbox_sk_okres">Topoľčany</option><option value="239" class="listbox_sk_okres">Zlaté Moravce</option><option value="605" class="listbox_sk_kraj">Prešovský kraj</option><option value="240" class="listbox_sk_okres">Bardejov</option><option value="241" class="listbox_sk_okres">Humenné</option><option value="242" class="listbox_sk_okres">Kežmarok</option><option value="243" class="listbox_sk_okres">Levoča</option><option value="244" class="listbox_sk_okres">Medzilaborce</option><option value="245" class="listbox_sk_okres">Poprad</option><option value="246" class="listbox_sk_okres">Prešov</option><option value="247" class="listbox_sk_okres">Sabinov</option><option value="248" class="listbox_sk_okres">Snina</option><option value="249" class="listbox_sk_okres">Stará Ľubovňa</option><option value="250" class="listbox_sk_okres">Stropkov</option><option value="251" class="listbox_sk_okres">Svidník</option><option value="252" class="listbox_sk_okres">Vranov nad Topľou</option><option value="606" class="listbox_sk_kraj">Trenčianský kraj</option><option value="253" class="listbox_sk_okres">Bánovce nad Bebravou</option><option value="254" class="listbox_sk_okres">Ilava</option><option value="255" class="listbox_sk_okres">Myjava</option><option value="256" class="listbox_sk_okres">Nové Mesto nad Váhom</option><option value="257" class="listbox_sk_okres">Partizánske</option><option value="258" class="listbox_sk_okres">Považská Bystrica</option><option value="259" class="listbox_sk_okres">Prievidza</option><option value="260" class="listbox_sk_okres">Púchov</option><option value="261" class="listbox_sk_okres">Trenčín</option><option value="607" class="listbox_sk_kraj">Trnavský kraj</option><option value="262" class="listbox_sk_okres">Dunajská Streda</option><option value="263" class="listbox_sk_okres">Galanta</option><option value="264" class="listbox_sk_okres">Hlohovec</option><option value="265" class="listbox_sk_okres">Piešťany</option><option value="266" class="listbox_sk_okres">Senica</option><option value="267" class="listbox_sk_okres">Skalica</option><option value="268" class="listbox_sk_okres">Trnava</option><option value="608" class="listbox_sk_kraj">Žilinský kraj</option><option value="269" class="listbox_sk_okres">Bytča</option><option value="270" class="listbox_sk_okres">Čadca</option><option value="271" class="listbox_sk_okres">Dolný Kubín</option><option value="272" class="listbox_sk_okres">Kysucké Nové Mesto</option><option value="273" class="listbox_sk_okres">Liptovský Mikuláš</option><option value="274" class="listbox_sk_okres">Martin</option><option value="275" class="listbox_sk_okres">Námestovo</option><option value="276" class="listbox_sk_okres">Ružomberok</option><option value="277" class="listbox_sk_okres">Turčianske Teplice</option><option value="278" class="listbox_sk_okres">Tvrdošín</option><option value="279" class="listbox_sk_okres">Žilina</option>';
var CUSTOM_CSS = '<style>.datum{color:lightgray;;font-size:.7em;}.text{margin:.5em;}.nick{color:white;}.bar{display:block;background:gray;}#message_list .sekce{visibility:hidden;}#form_message_loading{display:none}.soubor{display:none}#profil_profilove_foto_l{display:none}   \
.app_bar{display:block;background:gray;}h3{font-family:Arial;text-transform:uppercase;font-weight:normal}.app_bar h3{margin:.2em;font-size:.7em;} \
#profile_list,#message_list{min-height:500px;margin:1em;}#profile_gallery{margin:1em;}#profile_list img{margin:0;padding:0}#tamp_data{display:none} \
.p_right a{padding-left:.2em;padding-right:.2em;color:black}.p_right a:hover{color:lightgray;}\
.panel_tab{position:relative;display:block;background:white;color:lightgray;}.panel_tab a{text-decoration:none;}.panel_tab h3{display:block;font-size:1em;color:lightgray;margin:0;padding:1em;}.p_left{position:absolute;left;1em;top:1em;}.p_right{position:absolute;right:1em;top:1em;} \
.leve{color:lightgray}#body_id{/*padding:1em;*/}.warn{margin:2em;text-align:center;}#prihlasit{margin:2em auto;width:15em;}#odeslat,#settings_apply{margin-top:1em; padding:.7em}\
#settings,#prihlasit{margin:2em;font-family:Arial;width:15em;margin:2em auto;}#profile_detail{margin:1em;}#profile_detail .leve_obal{width:10em;float:left;}#profile_detail .clean_left{clear:both;}#profile_detail .leve_2{float:left;width:5em;}.celek_obal{margin-top:1em;}</style>';

// storage containers
var ProfileBox = function(options)
{
    pB = {};    
    pB.items = {};
    pB.order = [];
    pB.index = 0;                   
    pB.put = function(key, item)
    {  
       // if new, place to order
       if(pB.items[key]==undefined)                
       {   
           item.OrderId = pB.index;        
           pB.order[pB.index] = key;           
           pB.index++;
       }    
       pB.items[key]=item;       
    };   
    pB.clean = function(x)
    {            
       // copy array
       i=0;  
       tmp=pB.index;
       for(j=x+1;j<pB.index;j++)
       {
          pB.order[i] = pB.order[j];                    
          i++; 
       }
       pB.index = i;        
       //delete associated objects
       for(i=pB.index;i<=x;i++)
       {
           delete pB.items[pB.order[i]];           
       }       
    };
    pB.clear = function()
    {        
        pB.items ={};    
        pB.index = 0; 
    };
    pB.getItems = function()
    {
       return pB.items;        
    };   
    pB.isExist = function(key)
    {
        return pB.items[key]!=undefined;
    };
    return pB;
}

// data parsers
var DataParser = function(options)
{
    dP = {};  
    dP.doc = document.implementation.createHTMLDocument("");
    dP.setHTMLContent = function(content)
    {        
       dP.doc.documentElement.innerHTML=content;
    };
    dP.parseOnline2 = function()
    {
       nodes =  dP.doc.getElementsByClassName('profil_nahled_obal');           
       for(var i=0;i<nodes.length;i++)
       {        
         // todo: control
         a = nodes[i].children[0].children[0];           
         r = nodes[i].children[1].children[0];  
         rl= nodes[i].children[1].children[1];
         src = a.children[0].getAttribute('src');      
         href = a.getAttribute('href');
         FX.profileBox.put(r.children[2].innerHTML,{Name:r.children[2].innerHTML,Age:r.children[3].innerHTML,City:r.children[0].innerHTML,Title:rl.children[0].innerHTML,Href:href,ThumbUrl:src,IsNoPhoto:(src=='http://static.nkcdn.cz/img/no_photo.png'), IsPrivate:(src=='http://static.nkcdn.cz/img/privatni_photo.png'),UserId:dP.extractMessageId2(src)});           
         var x = $(a.innerHTML);                     
         x.click(function()
         {
            FX.requestBox.profileDetail(href); 
         });        
       }
       FX.widgetRenderer.renderOnline();    
    };
    dP.parseLoggedIn = function(data)
    {
         needToRefresh=false;
         for(i=0;i<data.users_prihlaseni.length;i++)
         {
            x = $(data.users_prihlaseni[i]);              
            name = x.find('.bubliny_nick').text();
            img = x.find('img');
            src = img.attr('src');
            href = x.attr('href');
            if(!FX.profileBox.isExist(name))
            {           
               FX.profileBox.put(name,{Name:name,Age:'(-/-/-)',City:'?',Title:'y/n',Href:href,ThumbUrl:src,IsNoPhoto:(src=='http://static.nkcdn.cz/img/no_photo.png'), IsPrivate:(src=='http://static.nkcdn.cz/img/privatni_photo.png'),UserId:dP.extractMessageId2(src)});
               needToRefresh=true; 
            }            
        }
        return needToRefresh;
    };
    dP.placeNodes = function(sourceName, targetName)
    {
       nodes = dP.doc.getElementsByClassName(sourceName);           
       for(var i=0;i<nodes.length;i++)
       {    
          $(nodes[i].innerHTML).appendTo(targetName);    
       }        
    };
    dP.parseProfileDetail = function()
    {        
       $('#profile_detail').html('');
       $('#profile_gallery').html(''); 
       nodes =  dP.doc.getElementsByClassName('udaje_galerie');          
       for(var i=0;i<nodes.length;i++)
       {              
          $(nodes[i].innerHTML).appendTo('#profile_gallery');    
       }           
       dP.placeNodes('udaje_hlavni','#profile_detail');   
       items = $('#profile_gallery a'); 
       $.each(items,function(){
          a =$(this);
          a.attr('onclick','');
          a.attr('href','#');
          a.click(function(){
             FX.panelSwitcher.open(FX.panelSwitcher.PANEL_PROFILE_GALLERY_ID);                
          });
        });
        items = $('#profile_detail a'); 
        $.each(items,function(){
           a =$(this);
           a.attr('onclick','');
           a.attr('href','#');            
        });  
    };
    dP.extractMessageId=function(str)
    {   
        x = str.split(/\(|\)/);
        if(x.length<2||(x[0]!='show_messages_with_user'))
        {
            return -1;
        }
        return x[1];
    }; 
    dP.extractMessageId2=function(str)
    {   
        x = str.split("_");
        if(x.length<2)
        {
            return -1;
        }
        return x[2];
    };  
    return dP;
}

// data filters
var DataFilter = function()
{
    dF={};
    dF.sortOnline=function()
    {
        // TODO: prepare data
    };
    dF.isOnlinePassed=function(item)
    {   
        if((item.IsNoPhoto&&!FX.pageState.FilterCriterium.IsNoPhotoRendered)||(item.IsPrivate&&!FX.pageState.FilterCriterium.IsPrivateRendered))
        {
            return false;
        }       
        if(FX.pageState.FilterCriterium.RegionName!=''&&FX.pageState.FilterCriterium.RegionName!='--'&&(item.City.search(FX.pageState.FilterCriterium.RegionName)==-1))
        {
            return false;
        }
        return true;                  
    };
    return dF;
};

// update requests
var RequestBox = function()
{
    rB = {};
    rB.totalBytes=0;
    rB.profileThumbs = function(href)
    {
       $.ajax({
          type: 'GET',
          dataType: 'json',
          url: href,
          async: false,
          success: function(data){           
             FX.dataParser.setHTMLContent(data.str);
             FX.dataParser.parseOnline2();  
             //rB.consumeBytes(data.length); 
          }
      });        
    };
    rB.onlineLoggedIn=function(href)
    {
       $.ajax({
          type: 'GET',
          dataType:'json',
          url: href,
          async: false,
          success: function(data){           
             if(FX.dataParser.parseLoggedIn(data))
             {
                FX.widgetRenderer.renderOnline();
             }
             rB.consumeBytes(JSON.stringify(data).length);  
          }
       });          
    };
    rB.consumeBytes = function(bytes)
    {
       
    };
    rB.profileDetail = function(val)
    {        
       $.ajax({
          type: 'GET',
          url: val.Href,
          async: false,
          success: function(data){
             FX.dataParser.setHTMLContent(data);
             FX.dataParser.parseProfileDetail();
             FX.panelSwitcher.open(FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID); 
             rB.consumeBytes(data.length); 
          }
      });
    };
    rB.messages = function(href,params,target)
    {        
       $.ajax({
          type: 'POST',
          dataType: 'json',
          url: href,
          data: params,
          success: function(e) {             
             x = $(e.str);
             //rB.consumeBytes(JSON.stringify(e).length);     
             lnt = x.find('.zprava_new').length;    
             FX.widgetRenderer.updateMessageStatus(lnt); 
             if(target==undefined)
             {                                
                return; 
             }     
             $('#'+target).html('');  
             x.appendTo('#'+target);    
             if($('#messages_items').length<=0)
             {                  
                 FX.contentOverrider.logout();               
                 return;   
             }
             $('#messages_items').attr('style',''); 
             items = x.find('.nick');            
             $.each(items,function()
             {   
                 a = $(this); 
                 id = FX.dataParser.extractMessageId(a.attr('onclick'));
                 FX.pageControls.messageWithUser(a,id);        
             });              
             itemsNew = $('.zprava_new a');   
             $.each(itemsNew,function()
             {   
                 a = $(this);
                 a.attr('href',''); 
                 a.attr('onclick','');
                 /*if(a.attr("class")!="nick")
                 {
                    id = FX.dataParser.extractMessageId(a.attr("onclick"));
                    FX.pageControls.messageWithUser(a,id);    
                                       
                 }*/
             });                 
             FX.panelSwitcher.open(FX.panelSwitcher.PANEL_MESSAGES_ID);
          }
       });   
    };
    rB.setAutomate=function(interval)
    {
       rB.timer=setTimeout(function()
       {
          FX.requestBox.onlineLoggedIn(FX.pageState.getOnlineLoggedInUrl());   
          rB.setAutomate(FX.pageState.loggedInCheckInterval); 
       },interval);    
    };
    rB.setMessageAutoCheck = function()
    {
        if(!FX.pageState.isLoggedIn)
        {
            return;
        }
        rB.messageTimer = setTimeout(function(){
            rB.messages(FX.pageState.getMessagesUrl(),{ action: "201", type: "1", section:"1", user_id:"0"},undefined);    
            rB.setMessageAutoCheck(FX.pageState.messageCheckInterval);
        },FX.pageState.messageCheckInterval);
    }
    return rB;
}

// page layout
var WidgetRenderer = function()
{
    wR = {};   
    wR.placeStyle = function(){
        $('head').html(CUSTOM_CSS);
        $('body').attr('style','background:black;color:white');
        $('body').attr('onload','');
        $('body').attr('id','body_id');
    };    
    wR.renderMainBar = function()
    {
        $('<div class="app_bar"><h3>&#9891;&nbsp;'+TITLE+'</h3></div>').appendTo("#body_id");   
    };
    wR.renderBody = function()
    {
       wR.panelTab({Key:FX.panelSwitcher.PANEL_PROFILES_ID,Title:'&nbsp;<a id="act_logout" href="#" title="Logout.">&#10006;</a><a style="display:none" title="Only text response." id="bytes_counter">0 kB</a>',IsVisible:true,Right:$('<a href="#" id="act_more">↻load</a> | <a href="#" id="act_settings">&#10047;</a> |<a href="#" id="act_messages">&#9993;[?]</a>')}).appendTo("#body_id");       
       wR.panelTab({Key:FX.panelSwitcher.PANEL_MESSAGES_ID,Title:"&#9993;&nbsp;Messages",IsVisible:false,Right:$('<a href="#" id="act_top_m">&#8593;</a>')}).appendTo('#body_id'); 
       wR.panelTab({Key:FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID,Title:'Detail <span id="profile_header"></span>',IsVisible:false,Right:$('<a href="#" id="act_message_with">&#9993;</a>|<a href="#" id="act_top_pd">&#8593;</a>')}).appendTo('#body_id');
       wR.panelTab({Key:FX.panelSwitcher.PANEL_PROFILE_GALLERY_ID,Title:'Gallery <span id="profile_header"></span>',IsVisible:false,Right:$('<a href="#" id="act_top_g">&#8593;</a>')}).appendTo('#body_id');         
       wR.panelTab({Key:FX.panelSwitcher.PANEL_SETTINGS_ID,Title:"&#10047;&nbsp;Settings",IsVisible:false,Right:$('<a href="#" id="act_top_s">&#8593;</a>')}).appendTo('#body_id'); 
       wR.panelTab({Key:FX.panelSwitcher.PANEL_LOGIN_ID,Title:"&#9654;&nbsp;Login",IsVisible:true,Right:$('<a href="#" id="act_top_l">&#8593;</a>')}).appendTo('#body_id');         
       wR.panelContent(FX.panelSwitcher.PANEL_PROFILES_ID,$('<div id="profile_list"></div>'),true); 
       wR.panelContent(FX.panelSwitcher.PANEL_LOGIN_ID,$('<form id="prihlasit" method="post" action=""><input type="hidden" name="prihlasit"></input><input type="hidden" name="ref"></input><label>Login</label><br/><input id="login_nick" name="login_nick" type="text"><br/><label>Password</label></br><input id="login_heslo" name="login_heslo" type="password"><br/></form>'),true); 
       wR.panelContent(FX.panelSwitcher.PANEL_LOGIN_ID,$('<form id="form_logout" method="post" action="?logout"><input type="hidden" name="save" value="1"></input></form>'),true); 
       wR.panelContent(FX.panelSwitcher.PANEL_MESSAGES_ID,$('<div id="message_list"></div>'),true); 
       wR.panelContent(FX.panelSwitcher.PANEL_MESSAGES_ID,$('<div id="temp_data"></div>'),true); 
       wR.panelContent(FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID,$('<div id="profile_gallery"></div>'),true);  
       wR.panelContent(FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID,$('<div id="profile_detail"></div>'),true); 
       wR.panelContent(FX.panelSwitcher.PANEL_PROFILE_GALLERY_ID,$('<div id="profile_detail" class="warn">Not implemented yet -_-</div>'),true);                
       wR.panelContent(FX.panelSwitcher.PANEL_SETTINGS_ID,wR.settings($('<form id="settings"><form>')),true);                       
       FX.pageControls.loginForm($('<input id="odeslat" type="submit" value="Send"></input>')).appendTo('#prihlasit');  
       FX.pageControls.logout($('#act_logout'));       
       FX.pageControls.loadNextOnline($('#act_more')); 
       FX.pageControls.settings($('#act_settings')); 
       FX.pageControls.returnToTop($('#act_top_m'),FX.panelSwitcher.PANEL_MESSAGES_ID);
       FX.pageControls.returnToTop($('#act_top_s'),FX.panelSwitcher.PANEL_SETTINGS_ID);  
       FX.pageControls.returnToTop($('#act_top_pd'),FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID); 
       FX.pageControls.returnToPanel($('#act_top_g'),FX.panelSwitcher.PANEL_PROFILE_GALLERY_ID,FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID);
       FX.pageControls.apply($('#settings_apply')); 
       FX.pageControls.messageList($('#act_messages'));  
       if(FX.pageState.isLoggedIn)
       {  
          FX.contentOverrider.login();           
       } 
       else
       {   
          FX.contentOverrider.logout();
       }        
    };
    wR.panelTab = function(params)
    {        
        if(params.Key==undefined)
        {
            alert('Need panel Id!')
        }
        panel = $('<div id="'+params.Key+'"></div>');   
        if(!params.IsVisible)
        {
            panel.css("display","none");
        }
        tab = $('<div class="panel_tab"><h3>'+params.Title+'</h3></div>');       
        if(params.Left!=undefined)
        {
           left =  $('<div class="p_left"></div>');
           left.append(params.Left);  
           left.appendTo(tab); 
        }
        if(params.Right!=undefined)
        {        
           right= $('<div class="p_right"></div>'); 
           right.append(params.Right); 
           right.appendTo(tab);
        }
        panel.append(tab);    
        panel.append($('<div id="' + params.Key + '_placeholder" ></div>'));        
        FX.panelSwitcher.register(params.Key,params.IsVisible);         
        return panel;
    }; 
    wR.panelContent=function(key, content,isAppended)
    {
        if(!isAppended)
        {
           $('#'+key+'_placeholder').html(content);
        }
        else
        {
            $('#'+key+'_placeholder').append(content);            
        }
        return content;
    };
    wR.updateMessageStatus = function(cnt)
    {    
        if(cnt==0)
        {       
           $('#act_messages').html('&#9993;['+cnt+']');
        }
        else
        {
            $('#act_messages').html('<strong>&#9993;['+cnt+']</strong>');
        }
    };
    wR.privateInfo = function()
    {
        $('#profile_gallery').html(""); 
        $('#profile_detail').html('<p class="warn">This is private profile. Please login.</p>'); 
    };
    wR.renderTitle=function(item)
    {
        return item.Name +''+ item.Age +'[' + item.Title +']' + item.City;
    };
    wR.clearProfileList = function()
    {
        $('#profile_list').html('');    
    };
    wR.renderOnline = function()
    {      
        FX.dataFilter.sortOnline();
        wR.clearProfileList();       
        breakCnt = FX.pageState.OnlineLimit; 
        for(i=FX.profileBox.index;i>0;i--)
        {
            if(breakCnt<=0){
                if(FX.profileBox.index>=2*FX.pageState.OnlineLimit)
                {
                   FX.profileBox.clean(i);    
                }               
                break;
            }
            val = FX.profileBox.items[FX.profileBox.order[i-1]];
            if(FX.dataFilter.isOnlinePassed(val))
            {               
               img = FX.pageControls.loadDetail($('<a href="#"><img src="'+val.ThumbUrl+'" title="'+wR.renderTitle(val)+'"/></a>'),val);
               img.appendTo('#profile_list');    
               breakCnt--; 
            }
        }
    };
    wR.regions = function(s)
    {
        s.html(COUNTER_REGION);
        return s;
    };
    wR.counters = function(params,s)
    {
        s.append($('<option value="0">--</option>'));
        for(i=params.From;i<=params.To;i+=params.Step)
        {
            s.append($('<option value="'+i+'">'+i+'</option>'));
        }      
        return s;
    };
    wR.settings = function(f)
    {       
       f.append($('<label for="count">Count</label><br>)'));
       f.append(wR.counters({From:10, To: 150, Step: 10},$('<select id="count"></select><br>')));
       f.append($('<label for="regions">Location</label><br>)'));
       f.append(wR.regions($('<select id="regions"></select><br>')));
       f.append($('<label for="age_from">Age</label><br>)'));
       f.append(wR.counters({From:15, To: 99, Step: 1},$('<select id="age_from"></select>')));
       f.append($('<label for="age_to">-</label>)'));
       f.append(wR.counters({From:15, To: 99, Step: 1},$('<select id="age_to"></select><br>'))); 
       f.append($('<label for="height_from">Heigh</label><br>)'));
       f.append(wR.counters({From:130, To: 230, Step: 1},$('<select id="height_from"></select>')));
       f.append($('<label for="height_to">-</label>)'));
       f.append(wR.counters({From:130, To: 230, Step: 1},$('<select id="height_to"></select><br>')));  
       f.append($('<label for="weight_from">Weight</label><br>)'));
       f.append(wR.counters({From:40, To: 150, Step: 1},$('<select id="weight_from"></select>')));
       f.append($('<label for="weight_to">-</label>)'));
       f.append(wR.counters({From:40, To: 150, Step: 1},$('<select id="weight_to"></select><br>'))); 
       f.append($('<input type="checkbox">photo only</input><br>)')); 
       f.append($('<label for="m_interval">Message interval [s]</label><br>)'));
       f.append(wR.counters({From:5, To: 60, Step: 5},$('<select id="m_interval"></select><br>'))); 
       f.append($('<label for="l_interval">Logged in interval [s]</label><br>)'));
       f.append(wR.counters({From:5, To: 60, Step: 5},$('<select id="l_interval"></select><br>')));  
       f.append($('<input id="settings_apply" type="submit" value="Apply"></input>'));         
       return f; 
    };
    return wR;
};

var PanelSwitcher = function()
{
    pS = {};
    pS.panels = {};
    pS.currentId = '';
    pS.PANEL_PROFILES_ID = 'panel_profiles';
    pS.PANEL_PROFILE_DETAIL_ID ='panel_p_detail';
    pS.PANEL_PROFILE_GALLERY_ID='panel_gallery';    
    pS.PANEL_LOGIN_ID = 'panel_login';
    pS.PANEL_MESSAGES_ID = 'panel_messages';
    pS.PANEL_SETTINGS_ID = 'panel_settings';
    pS.register = function (key,isVisible)
    {        
        $('#'+key).css('display','none');
    };
    pS.open = function(key)
    {       
        pS.currentId=key;
        $('#'+key).fadeIn('slow');
        FX.pageControls.navigateToId(key);
    };
    pS.close = function(key)
    {        
         $('#'+key).fadeOut('slow');
    };
    pS.getCurrentId = function()
    {
        return pS.currentId;
    };
    pS.transition = function(from, to)
    {     
       pS.close(from);
       pS.open(to);              
    };    
    return pS;
};

// page action control
var PageControls = function()
{
    pC = {};   
    pC.navigateToId = function(id)
    {
       aTag = $('#'+ id);
       $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    };
    pC.returnToTop=function(a,panelId)
    {
        a.click({Id:panelId},function(e)
        {
            FX.panelSwitcher.close(e.data.Id);
        }); 
        return a;
    };
    pC.returnToPanel=function(a,panelId,targetId)
    {
        a.click({Id:panelId,TargetId:targetId},function(e)
        {
            FX.panelSwitcher.open(e.data.TargetId);
            FX.panelSwitcher.close(e.data.Id);            
        }); 
        return a;
    };
    pC.settings = function(a)
    {
        a.click(function(e)
        {
            FX.panelSwitcher.open(FX.panelSwitcher.PANEL_SETTINGS_ID);
        });        
    };
    pC.apply = function(a)
    {
        a.click(function(){
            regionName = $('#regions option:selected').text();
            count = $('#count').val();                        
            if(count>0)
            {
                FX.pageState.OnlineLimit = count;                
            }           
            FX.pageState.FilterCriterium.RegionName = regionName;                
            FX.widgetRenderer.renderOnline();
        }); 
       return a;       
    };
    pC.loginForm = function(a)
    {
         a.click(function()
         {
             nick = $('#login_nick').val();
             pass = $('#login_heslo').val();                    
             if(nick.length<1||pass.length<3)
             {
                alert('Insert valid login and password!');
                return false; 
             } else                
             {    
                $('#prihlasit').attr('action','/online/')
                $('#prihlasit [name=ref]').val('/online/');
                $('#prihlasit [name=prihlasit]').val(''); 
             }
        });
        return a;
    };
    pC.logout = function(a)
    {        
        a.click(function(){
            FX.pageState.update();
            x = confirm('Are you sure to logout?');
            if(x)
            {            
               $('#form_logout').submit();
            }              
        });
        return a;
    };
    pC.loadOnline = function()
    {            
       FX.requestBox.profileThumbs(FX.pageState.getOnlineThumbsUrl());
       FX.pageState.currentPage+=1; 
       if(FX.pageState.currentPage>FX.pageState.maxNumOfPages)
       {
          FX.pageState.currentPage=2;  
       } 
    };   
    pC.loadNextOnline = function(a)
    {
       a.click(pC.loadOnline);
       return a;
    };
    pC.loadDetail=function(a,val)
    {
        a.click(val,function(e)
        {
            $('#profile_header').html(': ' + val.Name +' '+ val.Age ); 
            if(!val.IsPrivate)
            {
               $('#act_message_with').unbind('click').click(e.data,function(x){
                   if(x.data.UserId!=undefined)
                   {
                       rB.messages(FX.pageState.getMessagesUrl(),{ action: '201', type: '2', section:'4', user_id:x.data.UserId},'message_list'); 
                   }
                   else
                   {
                       x.attr('href','#');
                   }
               }) 
               FX.requestBox.profileDetail(e.data); 
            }
            else
            {
               FX.widgetRenderer.privateInfo();
               FX.panelSwitcher.open(FX.panelSwitcher.PANEL_PROFILE_DETAIL_ID);                
               FX.contentOverrider.logout(); 
            }
        });
        return a;
    };
    pC.messageWithUser = function(a,id)
    {      
        a.attr('href','#');
        a.unbind('click').click({Id:id+''},function(e)
        {              
           rB.messages(FX.pageState.getMessagesUrl(),{ action: '201', type: '2', section:'4', user_id:e.data.Id},'message_list'); 
           return false; 
        });
        return a;
    }; 
    pC.messageList = function(a)
    {       
       a.click(function(){ 
          FX.requestBox.messages(FX.pageState.getMessagesUrl(),{ action: '201', type: '1', section:'1', user_id:'0'},'message_list');          
       });
       return a;
    }; 
    pC.panels=function(panels)
    {
       $.each(panels,function(key,val)
       {
           if(val.Id!=undefined)
           {
              FX.panelSwitcher.register(val.Id,val.IsVisible);             
           }
       });                  
    };
    pC.region = function(s)
    {
        s.change(function(){
            x= $(this);
            FX.pageState.FilterCriterium.RegionId = x.val();
        });       
    };
    return pC;    
};

// change DOM structure
var ContentOverrider = function()
{
    cO = {};
    cO.removeStuff = function()
    {
         // Ooops, sitebuilders, please do not watch this...
         $('head').html('');  
         $('body').html('');
    };
    cO.init = function()
    {
        FX.pageState.update();
        cO.removeStuff(); 
        FX.widgetRenderer.placeStyle();       
        FX.widgetRenderer.renderMainBar();            
        FX.widgetRenderer.renderBody(); 
        FX.requestBox.setAutomate(FX.pageState.loggedInCheckInterval);
        if(FX.pageState.isLoggedIn)
        {
            FX.requestBox.messages(FX.pageState.getMessagesUrl(),{ action: "201", type: "1", section:"1", user_id:"0"},undefined);    
            FX.requestBox.setMessageAutoCheck();
        }
        FX.pageControls.loadOnline(); 
    };
    cO.logout = function()
    {
        FX.panelSwitcher.open(FX.panelSwitcher.PANEL_LOGIN_ID);        
        $('#act_logout').css('visibility','hidden');
        $('#act_messages').css('display','none');
        $('#act_message_with').css('display','none');
        $('#act_login').css('display','inline');      
        //cO.clear();
    };
    cO.login = function()
    {
        //hide login form
        FX.panelSwitcher.close(FX.panelSwitcher.PANEL_LOGIN_ID);        
        $('#act_logout').css('visibility','visible');
        $('#act_messages').css('display','inline');
        $('#act_message_with').css('display','inline');
        $('#act_login').css('display','none');
        //cO.clear();   
        //FX.pageControls.loadOnline(); 
    };
    cO.clear = function()
    {
       // clear stuff 
       FX.profileBox.clear();         
       FX.widgetRenderer.renderOnline();        
       FX.pageState.currentPage=1;       
    };  
    return cO;    
}

// current state of page 
var PageState = function()
{
    pS={};
    pS.isLoggedIn = false;
    pS.FilterCriterium = {};
    pS.OnlineLimit = 100;
    pS.FilterCriterium.IsPrivateRendered  = true;
    pS.FilterCriterium.IsNoPhotoRendered = true;  
    pS.FilterCriterium.IsIgnoredRendered = false;
    pS.FilterCriterium.AgeFrom = '';
    pS.FilterCriterium.AgeTo='';
    pS.FilterCriterium.HeightFrom = '';
    pS.FilterCriterium.HeightTo = '';
    pS.FilterCriterium.WeightFrom = '';
    pS.FilterCriterium.WeightTo=''; 
    pS.FilterCriterium.IsProfilePhoto = 0;
    pS.FilterCriterium.RegionId = 0;
    pS.FilterCriterium.RegionName = '';
    pS.loggedInCheckInterval = INTERVAL_ONLINE_CHECK;
    pS.messageCheckInterval = INTERVAL_MESSAGE_CHECK;
    pS.maxNumOfPages = 5;
    pS.getOnlineThumbsUrl=function()
    {
       return 'http://www.nakluky.cz/index.php?u=/online/&hash=&page='+pS.currentPage + '&filtr=0&save=&typ=0&okres='+ pS.FilterCriterium.RegionId+'&vek_od='+pS.FilterCriterium.AgeFrom+'&vek_do='+ pS.FilterCriterium.AgeTo + '&vyska_od='+pS.FilterCriterium.HeightFrom+'&vyska_do='+pS.FilterCriterium.HeightTo+'&vaha_od='+pS.FilterCriterium.WeightFrom +'&vaha_do='+pS.FilterCriterium.WeightTo +'&profilove_foto=' + pS.FilterCriterium.IsProfilePhoto;    
    };
    pS.getLoginUrl = function()
    {
       return 'http://www.nakluky.cz/';     
    };
    pS.getLogoutUrl = function()
    {
        return 'http://www.nakluky.cz/online/?logout';
    };
    pS.getMessagesUrl = function()
    {
       return 'http://www.nakluky.cz/ajax/ajax.php';           
    };
    pS.getOnlineLoggedInUrl = function()
    {
        return 'http://www.nakluky.cz/ajax/ajax_bubble.php';
    };    
    pS.currentPage = 1;   
    pS.update = function()
    {        
        pS.isLoggedIn = $('#login_nick').length==0; 
    };
    return pS;
}

// current context
var FX = {}; 
FX.dataParser = DataParser();                  // parse data
FX.dataFilter = DataFilter();                  // filter data
FX.profileBox = ProfileBox();                  // profile storage
FX.widgetRenderer = WidgetRenderer();          // render page layout       
FX.contentOverrider = ContentOverrider();      // override layout stuff
FX.requestBox = RequestBox();                  // all requests
FX.pageControls = PageControls();              // assign actions to elements  
FX.panelSwitcher = PanelSwitcher();            // switch panels  
FX.pageState = PageState();                    // current state of page 

// start 
FX.contentOverrider.init();
