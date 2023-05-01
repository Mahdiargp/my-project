<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <label for="input1">ورودی 1:</label><br />
    <input type="text" id="input1" name="input1" /><br />

    <label for="input2">ورودی 2:</label><br />
    <input type="text" id="input2" name="input2" /><br />

    <label for="input3">ورودی 3:</label><br />
    <input type="text" id="input3" name="input3" /><br />

    <label for="input4">ورودی 4:</label><br />
    <input type="text" id="input4" name="input4" /><br />

    <label for="input5">ورودی 5:</label><br />
    <input type="text" id="input5" name="input5" /><br />

    <button id="btnSubmit">submit</button>

    <script>
      // خواندن مقدار هر ورودی

      
      var btnSubmit = document

        .getElementById("btnSubmit")
        .addEventListener("click", function (e) {
          console.log("Click happened for: " + e.target.id);

          var input1Value = document.getElementById("input1").value;
          var input2Value = document.getElementById("input2").value;
          var input3Value = document.getElementById("input3").value;
          var input4Value = document.getElementById("input4").value;
          var input5Value = document.getElementById("input5").value;
          var hello = document.querySelector("#input1").value;

          var input1Number = parseInt(input1Value);
          var input2Number = parseInt(input2Value);
          var input3Number = parseInt(input3Value);
          var input4Number = parseInt(input4Value);
          var input5Number = parseInt(input5Value);
          console.log(input1Number);

          if (
            input1Number === 1 &&
            input2Number === 2 &&
            input3Number === 3 &&
            input4Number === 4 &&
            input5Number === 5
          ) {
            // نمایش پیام موفقیت آمیز
            alert("حدس شما درست بود!");
          } else {
            // نمایش پیام ناموفق
            alert("حدس شما نادرست بود!");
          }

        });
    </script>
  </body>
</html>
