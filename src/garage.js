import React from 'react';
import './Garage.css'

class GarageTabs extends React.Component {
  render(){
    return(

        <div class="cont_central">
          <div class="cont_modal cont_modal_active">
            <div class="cont_photo">
              <div class="cont_img_back">

              </div>
              <div class="cont_mins">
                <div class="sub_mins">
                  <h3>50</h3>
                  <span>MINS</span>
                </div>
              </div>
            </div>
            <div class="cont_text_ingredients">
              <div class="cont_over_hidden">
                <div class="cont_tabs">
                  1992 TOYOTA MR2
                </div>
                <div class="cont_text_det_preparation">
                  <div class="cont_title_preparation">
                    <p>ENGINE</p>
                  </div>
                  <div class="cont_info_preparation">
                    <p>Heat oven to 375 degress</p>
                  </div>
                  <div class="cont_text_det_preparation">
                    <div class="cont_title_preparation">
                      <p>STEP 2</p>
                    </div>
                    <div class="cont_info_preparation">
                      <p>Heat oil in a large skillet over medium-low head. Add onion and bell papper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cook 1 minute. Pour in tomatoes and season with 3/4 teaspoon salt and 1/4 teaspoon pepper;</p>
                    </div>
                  </div>
                </div>
                <div class="cont_btn_mas_dets">
                  <a href="#"><i class="material-icons">&#xE313;</i></a>
                </div>
              </div>
              <div class="cont_btn_open_dets">
                <a href="#e" onclick="open_close()"><i class="material-icons">&#xE314;</i></a>
              </div>
            </div>
            </div>
  </div>

    );
  }
}

export default GarageTabs;
