 <script>
       $(function(){
           $('.toggle').click(function() {
               $(this).toggleClass('active');
   
               if ($(this).hasClass('active')) {
                   $ ('.gnav').addClass('active');
               } else {
                   $('.gnav').removeClass('active');
               }
       
           });
       }); 
   
    </script>
