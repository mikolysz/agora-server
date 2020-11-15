// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// Adapted from https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#toggling-themes

document.addEventListener("DOMContentLoaded", function() { 
    // Select button
    const btn = document.querySelector(".theme-toggle");

    // Listen for a click on the button
    btn.addEventListener("click", function() {
      // Select the stylesheet <link>
      var theme = document.querySelector("#theme-link");
      if (theme.getAttribute("href") == "/static/css/screen-light.css") {
        theme.href = "/static/css/screen-dark.css";
      } else {
        theme.href = "/static/css/screen-light.css";
      }
    });
});