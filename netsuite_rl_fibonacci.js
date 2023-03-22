/**
 * @author Angel Leon <angi.lecas93@gmail.com>
 * @Name netsuite_rl_fibonacci.js
 * @description Script que genera el número fibonacci para n y retorna el valor resultante 
 * @NApiVersion 2.1
 * @NScriptType Restlet
 */
define(['N/log'], function (log) {
   const entry_point = {
      post: null
   };

   entry_point.post = function (request) {
      log.audit('request', request);

      var response = {
         code: 200,
         message: ""
      };

      try {
         var n = parseInt(request.n);

         if (isNaN(n)) {
            response.code = 400;
            response.message = "Valor inválido para n, debe ser númerico.";
            return response;
         }

         var fibNum = getFib(n);

         response.message = fibNum;
      } catch (error) {
         log.error('error', error);
         response.code = 500;
         response.message = error;
      }

      return response;
   }

   return entry_point;

   /**
    * Genera el número fibonacci para el indice n
    * @param {Number} n Indice a generar
    */
   function getFib(n) {
      var fibNum = [0, 1];

      for (var i = 0; i < n; i++) {
         fibNum.push(fibNum[i] + fibNum[i + 1]);
      }

      return fibNum[i];
   }
});
