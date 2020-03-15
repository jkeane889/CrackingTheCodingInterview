// Longest Substring

    /*

        create global variable equal to longest
        create global variable equal to max longest

        iterate over characters

        if next character DOES NOT equal current character
            longest += 1
            if longest > max longest
                max longest = longest
            

    */

      const longestSub = string => {
          let maxLongest = 0;
          let longest = 0;
          let substring = {};

          for (let i = 1; i < string.length; i++) {
            let current = string[i];
            let previous = string[i - 1];
            
            if (previous !== current) {
                if (!substring[string[i]]) {
                    substring[string[i]] = 1;
                } else {
                    substring[string[i]] += 1;
                }
                
                longest = Object.values(substring).reduce((acc, val) => { return acc + val})
                if (longest > maxLongest) {
                    maxLongest = longest;
                };
            } else {
                substring = {};
                substring[string[i]] = 1;
            }
          };

          return maxLongest;
      };

    //   console.log(longestSub("nndfddf")); // ndf
      console.log(longestSub("HsPCAwVhBOuLcxFUeFAsMfQveOyhGYJsCivpCQZxrXQnZbusjWVsrmfZeayQGAhSFbnERJYrTaaisrwObalAbbgvXTfUNALaFyMjMAAWrLDLRALPvlIIQGLfYymPcKwuUbfIGixYUwVMnidAOuMWEchOgYYZcJDabkfiVrtEBjOwDJoqaNnlVOBnbnFCBKoydRQZiRwRnfieZSpscukJaawOnKeOlVkOrqqBfuUXPjjcyyKJQbbGuQHywQKfGWWyTPzbpqmkfsoUoWfVQAPMMccavTHtAdKlnsxySHnwbqTDSyKXCqxapXanjyZIedZalMiTRBdDNTRLxjdREJrGaacRqUFJsnHLJAxAUDipFmmkUEHEUumiIyNTMDyjEdWZkJxuAyBkkCgrwwuMliRydYrzRepfKWaLkUdgZoBSoGgduQHizbifXQlVjOktzLHKfJtxnoplrbSYrtZprEbBxaXbjYhTzRFcgFFCclJtyEjFLbEhyCAQXStXIFZSusmiBgIARpsYnwVmiZOOaMVynWlNhAAmHHvsmOBLOtgQZiyWHMjnqcxuqAYKYbgKuJqyqTzvtKfAjUNoiYZdIhuxKpcZFMojpjswkYgzFNcNhZhvbJPNhASuRHYTuvgbDKErhsHeDaOUzWnCwavdMSJhgQCFIWLDfPIhyCXSdSAARapqDKCWUKpTkXKCOXhJqbIFUoYBqHwICGElNgWtiiyQTDFrQfOqheFIjyQDvmHnAKhowQMTpZjyVFDsAtZoyXMCOzCYfxetiPQYmEoHpMDIeodrtRBbcPRQUSfTuUfLXbzsjcCXiLeSQHHIweyrmNRzaUpduxOfNwIoSVOLUEgALcq")); // ndf
