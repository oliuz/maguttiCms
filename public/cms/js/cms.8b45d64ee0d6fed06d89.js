!function(e){function t(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}({"0DHg":function(e,t){window.urlAjaxHandlerCms=_SERVER_PATH+"/admin/api/",window.curItem,window.Cms=function(){function e(){$('[data-toggle="tooltip"]').tooltip(),jQuery(".popovers").popover(),jQuery(".popovers-show").popover("show"),jQuery(".popovers-hide").popover("hide"),jQuery(".popovers-toggle").popover("toggle"),jQuery(".popovers-destroy").popover("destroy"),jQuery('[data-toggle="buttons-radio"]').button()}function t(){jQuery(".list-toggle").on("click",function(){jQuery(this).toggleClass("active")})}function o(){jQuery("div.flash").not(".alert-important").delay(1500).slideUp()}function a(){$(":input[data-list-value]").on("change",function(){var e=$(this).val(),t=$(this).data("list-value").split("_"),o=$(this).data("list-name");$(this).is(":checkbox")&&(e=$(this).is(":checked")?1:0),$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+t[0]+"/"+t[1],data:{model:t[0],field:o,value:e},type:"GET",dataType:"json",cache:!1,success:function(e){$.notify(e.message,"success")},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})}),$("[data-list-boolean]").on("click",function(){var e=$(this).data("list-boolean").split("_"),t=$(this).data("list-name"),o=$(this).find(".text-success"),a=$(this).find(".text-error"),i=o.hasClass("hidden")?1:0;$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+e[0]+"/"+e[1],data:{model:e[0],field:t,value:i},type:"GET",dataType:"json",cache:!1,success:function(e){o.toggleClass("hidden"),a.toggleClass("hidden"),$.notify(e.message,"success")},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})}),$('[data-role="delete-item"]').on("click",function(e){e.preventDefault();var t=this;bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",function(e){e&&(location.href=t.href)})}),$("input.checkbox").click(function(){var e=$("input.checkbox:checked").length;e>0?($("#toolbar_cerca").hide(),1==e?(curItem=$("input.checkbox:checked").val(),$("#toolbar_editButtonHandler").show()):$("#toolbar_editButtonHandler").hide(),$("#list-action-bar").fadeIn("1000")):($("#list-action-bar").hide(),$("#toolbar_cerca").fadeIn("1000"))}),$("#toolbar_editButtonHandler").on("click",function(e){e.preventDefault(),location.href=$("#row_"+curItem+' [data-role="edit-item"] ')[0].href}),$("#toolbar_deleteButtonHandler").on("click",function(e){e.preventDefault();$(this).data("role");bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",function(e){e&&($("input.checkbox:checked").each(function(e){$("#row_"+$(this).val()).fadeOut("1000"),deleteUrl=$("#row_"+$(this).val()+' [data-role="delete-item"] ')[0].href,curModel=_CURMODEL,$.ajax({url:urlAjaxHandlerCms+"delete/"+curModel+"/"+$(this).val(),type:"GET",dataType:"json",cache:!1,success:function(e){},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})}),$.notify("Selected items have been deleted"))})})}$("#sidebar").mCustomScrollbar({theme:"minimal",scrollInertia:200});var i="true"==localStorage.sidebar_compressed;return i&&($("#sidebar").addClass("compressed"),$("body").addClass("expanded")),$("#sidebar-button").click(function(){$("#sidebar").toggleClass("compressed"),$("body").toggleClass("expanded"),i=!i,localStorage.setItem("sidebar_compressed",i)}),{init:function(){e(),a(),o(),t()},initDatePicker:function(){$(".datepicker").datepicker({dateFormat:"dd-mm-yy"})},initUploadifiveSingle:function(){$(".file_upload_single").each(function(){var e=$(this);e.uploadifive({auto:!0,queueID:"queue_"+e.data("key"),uploadScript:urlAjaxHandlerCms+"uploadifiveSingle",onAddQueueItem:function(t){this.data("uploadifive").settings.formData={timestamp:"1451682058",token:"4b9fe8f26d865150e4b26b2a839d4f2b",Id:$("#itemId").val(),myImgType:$("#myImgType").val(),model:_CURMODEL,key:e.data("key"),_token:$("[name=_token]").val()}},onUploadComplete:function(t,o){var a=jQuery.parseJSON(o),i=(a.data,a.filename);$('[name="'+e.data("key")+'"]').val(i)}})})},initUploadifiveMedia:function(){var e=$("#file_upload_media");e.uploadifive({auto:!0,queueID:"queue_media",uploadScript:urlAjaxHandlerCms+"uploadifiveMedia",onAddQueueItem:function(t){this.data("uploadifive").settings.formData={timestamp:"1451682058",token:"4b9fe8f26d865150e4b26b2a839d4f2b",Id:$("#itemId").val(),myImgType:$("#myImgType").val(),model:_CURMODEL,key:e.data("key"),_token:$("[name=_token]").val()}},onUploadComplete:function(e,t){var o=jQuery.parseJSON(t),a=o.data;$("#"+a+"ListBody").load(urlAjaxHandlerCms+"updateHtml/"+a+"/"+_CURMODEL+"/"+$("#itemId").val())}})},initTinymce:function(){tinymce.init({selector:"textarea.wyswyg",plugins:["advlist autolink lists link image charmap print preview anchor textcolor colorpicker","searchreplace visualblocks code fullscreen","insertdatetime media table contextmenu paste hr pagebreak"],pagebreak_split_block:!0,toolbar:"insertfile undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"})},initColorPicker:function(){$(".color-picker").colorpicker({format:"hex"})},initSortableList:function(e){$(e).sortable({revert:!0,update:function(t,o){var a=$(e).sortable("serialize");$("#info").load(urlAjaxHandlerCms+"updateMediaSortList?"+a)}}),$("ul#simpleGallery").disableSelection()},initImageRelationList:function(){$("[data-image-relation]").on("click",function(){var e=$(this).data("image-relation"),t=$(this).data("image-id");$("#"+e).val(t),$('[data-image-relation="'+e+'"]').each(function(e){$(this).removeClass("active"),$(this).addClass("inactive")}),$(this).addClass("active")})},initDateTimePicker:function(){$(".datetimepicker").datetimepicker({controlType:"select",oneLine:!0,dateFormat:"dd-mm-yy",timeFormat:"HH:mm:ss",hourMin:6,hourMax:22})},deleteImages:function(e){bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",function(t){var o=e,a=o.id.split("-"),i=a[1],n=$("#box_"+a[1]+"_"+a[2]);t&&$.ajax({url:urlAjaxHandlerCms+"update/updateItemField/"+_CURMODEL+"/"+a[2],data:{model:_CURMODEL,field:i,value:""},type:"GET",dataType:"json",cache:!1,success:function(e){$("input[name="+a[1]+"]").val(""),$.notify(e.message,"success"),n.hide()},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})})},deleteItem:function(e){bootbox.setLocale(_LOCALE),bootbox.confirm("<h4>Are you sure?</h4>",function(t){var o=e,a=o.id.split("_"),i=$("#box_"+a[1]+"_"+a[2]);t&&$.ajax({url:urlAjaxHandlerCms+"delete/"+a[1]+"/"+a[2],type:"GET",dataType:"json",cache:!1,success:function(e){$.notify(e.message,"success"),i.hide()},error:function(e,t,o){$.notify("Something went Wrong please"+e.responseText+o)}})})}}}()},2:function(e,t,o){e.exports=o("0DHg")}});