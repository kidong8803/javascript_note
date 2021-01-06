var pattern = /(\W)\S(\W)/;
                var str = "coding everybody";
                var result = str.replace(pattern, "$2, $1");
                alert (result)