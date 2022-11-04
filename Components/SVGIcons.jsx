import React from "react";

const SVGIcons = ({ icon }) => {
    switch (icon) {
        case "logo":
            return (
                <svg width="118" height="34" viewBox="0 0 118 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.1771 11.5903C53.0367 12.5982 53.4517 13.7246 53.4517 14.9992C53.4221 16.4517 52.9182 17.667 51.9696 18.6453C51.021 19.6235 49.8353 20.0977 48.4718 20.0977H42.7508C41.7429 20.0977 41.1501 19.831 40.9722 19.2677C40.8833 19.0306 40.8536 18.6452 40.8536 18.1413V6.10645C40.8536 5.75074 40.8536 5.5136 40.8833 5.33575C40.9129 5.18753 40.9722 4.98004 41.0908 4.77254C41.2983 4.38719 41.8615 4.17969 42.7804 4.17969H48.2346C49.5685 4.17969 50.6653 4.65397 51.5842 5.57289C52.5328 6.52145 53.0071 7.64787 53.0071 8.95214C53.0071 9.93034 52.7403 10.79 52.1771 11.5903ZM49.6278 14.7917C49.6278 14.436 49.5982 14.1692 49.5093 13.9617C49.4203 13.7542 49.3018 13.606 49.0943 13.5171C48.7978 13.3985 48.4125 13.3392 47.8789 13.3392C47.3454 13.3392 46.96 13.2503 46.6932 13.0428C46.4264 12.8353 46.3079 12.4203 46.3079 11.7978C46.3079 11.1753 46.4561 10.7603 46.7229 10.5528C46.9896 10.3453 47.4343 10.2564 48.0568 10.2564C48.6496 10.2564 48.9757 10.1082 49.0943 9.81177C49.1239 9.66356 49.1536 9.39678 49.1536 9.04106C49.1536 8.68535 49.035 8.41857 48.7978 8.27036C48.5607 8.12215 48.205 8.06286 47.7307 8.06286H44.7072V16.2738H48.2643C49.1832 16.2442 49.6278 15.7699 49.6278 14.7917Z" fill="url(#paint0_linear_888_15429)" />
                    <path d="M83.4499 17.4296C83.6574 17.9631 83.776 18.3188 83.776 18.556C83.776 19.1192 83.3314 19.5638 82.4421 19.9492C81.9678 20.1567 81.6121 20.2456 81.3157 20.2456C81.0193 20.2456 80.8118 20.1863 80.6339 20.0381C80.4561 19.8899 80.3078 19.7713 80.2189 19.6231C80.0707 19.3563 79.5075 18.0521 78.5293 15.6807L77.8475 15.7103H75.1204V18.1706C75.1204 18.4967 75.1204 18.7635 75.0908 18.9117C75.0611 19.0599 75.0018 19.2674 74.8833 19.4749C74.6758 19.8602 74.1125 20.0677 73.1936 20.0677C72.1858 20.0677 71.5929 19.801 71.4151 19.2674C71.3261 19.0303 71.2965 18.6449 71.2965 18.141V6.10611C71.2965 5.78004 71.2965 5.51326 71.3261 5.36504C71.3558 5.21683 71.4151 5.00933 71.5337 4.80184C71.7411 4.41648 72.3044 4.20898 73.2233 4.20898H77.9068C79.1814 4.20898 80.4264 4.68327 81.6121 5.60218C82.205 6.04682 82.6792 6.66932 83.035 7.41038C83.4203 8.18109 83.5982 9.04072 83.5982 9.95964C83.5982 11.59 83.0646 12.9535 81.9678 13.991C82.2642 14.7914 82.7682 15.9178 83.4499 17.4296ZM75.0908 11.8864H77.8772C78.2921 11.8864 78.7071 11.7382 79.1221 11.4121C79.5371 11.0861 79.7446 10.6118 79.7446 9.98928C79.7446 9.36679 79.5371 8.86286 79.1221 8.5368C78.7071 8.21073 78.2625 8.06252 77.8179 8.06252H75.0908V11.8864Z" fill="url(#paint1_linear_888_15429)" />
                    <path d="M96.7298 4.86077C96.878 4.59399 97.0855 4.44578 97.3523 4.35685C97.6191 4.26792 97.9748 4.23828 98.3898 4.23828C98.8048 4.23828 99.1309 4.26792 99.3976 4.35685C99.6644 4.41614 99.8423 4.50506 99.9609 4.62363C100.079 4.7422 100.168 4.89042 100.228 5.06827C100.317 5.30541 100.346 5.66112 100.346 6.16505V18.1999C100.346 18.5556 100.346 18.7928 100.317 18.9706C100.287 19.1188 100.228 19.3263 100.109 19.5338C99.9016 19.9192 99.3384 20.1267 98.4194 20.1267C97.8562 20.1267 97.4709 20.097 97.2337 20.0081C97.0262 19.9192 96.8484 19.771 96.7002 19.5931C93.4395 15.2653 91.3052 12.4196 90.2677 11.0857V18.2296C90.2677 18.5853 90.2677 18.8224 90.2381 19.0003C90.2085 19.1485 90.1492 19.356 90.0306 19.5635C89.8231 19.9488 89.2599 20.1563 88.341 20.1563C87.4517 20.1563 86.8885 19.9488 86.681 19.5635C86.5624 19.356 86.5031 19.1485 86.4735 18.9706C86.4438 18.7928 86.4438 18.5556 86.4438 18.1999V6.07612C86.4438 5.51291 86.5031 5.12756 86.6513 4.86077C86.7996 4.59399 87.0071 4.44578 87.2738 4.35685C87.5406 4.26792 87.8963 4.23828 88.341 4.23828C88.7856 4.23828 89.1117 4.26792 89.3785 4.35685C89.6452 4.44578 89.8231 4.53471 89.912 4.62363C89.9713 4.65328 90.1492 4.86077 90.4159 5.18684C93.4691 9.3368 95.5145 12.0936 96.5223 13.3978V6.07612C96.5223 5.51291 96.5816 5.12756 96.7298 4.86077Z" fill="url(#paint2_linear_888_15429)" />
                    <path d="M113.982 4.80184C114.13 4.5647 114.338 4.41648 114.604 4.32755C114.871 4.23863 115.227 4.20898 115.642 4.20898C116.057 4.20898 116.383 4.23863 116.62 4.32755C116.857 4.38684 117.065 4.47577 117.183 4.59434C117.302 4.68327 117.42 4.86112 117.48 5.03898C117.569 5.27612 117.598 5.66147 117.598 6.16539V12.7164C117.598 14.6135 117.005 16.3624 115.82 17.9335C115.227 18.6745 114.486 19.2674 113.596 19.712C112.678 20.1567 111.67 20.3938 110.573 20.3938C109.476 20.3938 108.468 20.1567 107.549 19.712C106.63 19.2378 105.919 18.6449 105.356 17.9038C104.17 16.3624 103.607 14.6432 103.607 12.6868V6.16539C103.607 5.80968 103.607 5.57254 103.637 5.39469C103.666 5.21683 103.726 5.03898 103.844 4.83148C103.963 4.62398 104.141 4.47577 104.437 4.38684C104.704 4.29791 105.089 4.26827 105.534 4.26827C106.008 4.26827 106.364 4.29791 106.63 4.38684C106.897 4.47577 107.105 4.62398 107.194 4.83148C107.372 5.15755 107.46 5.63183 107.46 6.19503V12.7164C107.46 13.6057 107.668 14.4357 108.113 15.236C108.32 15.651 108.646 15.9771 109.091 16.2142C109.535 16.4514 110.039 16.5699 110.632 16.5699C111.699 16.5699 112.47 16.1846 113.004 15.3842C113.537 14.6135 113.774 13.6946 113.774 12.6571V5.98754C113.745 5.42433 113.834 5.03898 113.982 4.80184Z" fill="url(#paint3_linear_888_15429)" />
                    <path d="M64.627 2.72711H60.1213C59.3802 2.72711 58.7578 2.10462 58.7578 1.36356C58.7578 0.622493 59.3802 0 60.1213 0H64.627C65.368 0 65.9905 0.622493 65.9905 1.36356C65.9905 2.10462 65.368 2.72711 64.627 2.72711Z" fill="#74CCD8" />
                    <path d="M60.0027 16.2735H66.6723C66.9983 16.2735 67.2651 16.2735 67.4133 16.3031C67.5912 16.3328 67.7691 16.3921 67.9765 16.5106C68.3619 16.7181 68.5694 17.2813 68.5694 18.2003C68.5694 19.2081 68.3026 19.801 67.769 19.9788C67.5319 20.0677 67.1466 20.0974 66.6426 20.0974H58.0463C57.0384 20.0974 56.4456 19.8306 56.2677 19.2674C56.1788 19.0303 56.1492 18.6745 56.1492 18.1706V6.13575C56.1492 5.39469 56.2974 4.89076 56.5642 4.62398C56.831 4.3572 57.3645 4.20898 58.1352 4.20898H66.6723C66.9983 4.20898 67.2651 4.20898 67.4133 4.23863C67.5616 4.26827 67.7691 4.32755 67.9765 4.44612C68.3619 4.65362 68.5694 5.21683 68.5694 6.13575C68.5694 7.1436 68.3026 7.73645 67.769 7.9143C67.5319 8.00323 67.1466 8.03287 66.6426 8.03287H59.9731V10.2264H64.2712C64.5973 10.2264 64.8641 10.2264 65.0123 10.2561C65.1901 10.2857 65.368 10.345 65.5755 10.4636C65.9609 10.6711 66.1684 11.2343 66.1684 12.1532C66.1684 13.161 65.9016 13.7539 65.3384 13.9317C65.1012 14.0207 64.7159 14.0503 64.2119 14.0503H59.9731V16.2735H60.0027Z" fill="url(#paint4_linear_888_15429)" />
                    <path d="M49.0943 25.3149C49.5686 25.5521 49.8057 25.7892 49.8057 26.0856C49.8057 26.2042 49.7464 26.4117 49.6279 26.6488L46.3672 33.2888C46.2783 33.4666 46.1597 33.6148 45.9818 33.7038C45.804 33.8223 45.6261 33.852 45.4186 33.852H45.3001C45.0926 33.852 44.9147 33.7927 44.7369 33.7038C44.559 33.6148 44.4404 33.4666 44.3515 33.2888L41.0908 26.6488C40.9722 26.3821 40.913 26.2042 40.913 26.0856C40.913 25.8188 41.1501 25.5521 41.6244 25.3149C41.8912 25.1667 42.0987 25.1074 42.2172 25.1074C42.3654 25.1074 42.4544 25.1371 42.5433 25.1667C42.6026 25.1964 42.6915 25.2556 42.7508 25.3446C42.8101 25.4335 42.899 25.5521 42.9583 25.6706C43.0176 25.7892 43.1658 26.1153 43.4029 26.6488C43.6401 27.1824 43.9069 27.7753 44.2033 28.3681C44.4701 28.9906 44.7369 29.5538 45.0036 30.0874C45.2408 30.6209 45.389 30.9174 45.4186 31.0063L47.79 25.8188C47.8493 25.6706 47.9086 25.5521 47.9679 25.4631C48.1161 25.2556 48.294 25.1371 48.5015 25.1371C48.709 25.1371 48.8275 25.1667 49.0943 25.3149Z" fill="#74CCD8" />
                    <path d="M53.3628 31.776H57.0089C57.1867 31.776 57.3349 31.776 57.4238 31.8056C57.5128 31.8056 57.6313 31.8649 57.7499 31.9242C57.9574 32.0427 58.076 32.3392 58.076 32.8431C58.076 33.4063 57.9278 33.7324 57.6313 33.8213C57.4831 33.8806 57.3053 33.8806 57.0089 33.8806H52.3253C51.7621 33.8806 51.4361 33.7324 51.3471 33.4359C51.2878 33.3174 51.2878 33.1099 51.2878 32.8431V26.2328C51.2878 25.8178 51.3768 25.551 51.525 25.4028C51.6732 25.2546 51.9696 25.1953 52.3846 25.1953H57.0681C57.246 25.1953 57.3942 25.1953 57.4831 25.225C57.5721 25.2546 57.6906 25.2842 57.8092 25.3435C58.0167 25.4621 58.1353 25.7585 58.1353 26.2624C58.1353 26.8257 57.9871 27.1517 57.6906 27.2406C57.5424 27.2999 57.3646 27.2999 57.0681 27.2999H53.4221V28.4856H55.7639C55.9417 28.4856 56.0899 28.4856 56.1789 28.5153C56.2678 28.5153 56.3864 28.5746 56.5049 28.6338C56.7124 28.7524 56.831 29.0488 56.831 29.5528C56.831 30.116 56.6828 30.442 56.3864 30.531C56.2381 30.5903 56.0603 30.5903 55.7639 30.5903H53.4517V31.776H53.3628Z" fill="#74CCD8" />
                    <path d="M116.916 25.3149C117.391 25.5521 117.628 25.7892 117.628 26.0856C117.628 26.2042 117.569 26.4117 117.45 26.6488L114.189 33.2888C114.1 33.4666 113.982 33.6148 113.804 33.7038C113.626 33.8223 113.448 33.852 113.241 33.852H113.122C112.915 33.852 112.737 33.7927 112.559 33.7038C112.381 33.6148 112.263 33.4666 112.174 33.2888L108.913 26.6488C108.794 26.3821 108.735 26.2042 108.735 26.0856C108.735 25.8188 108.972 25.5521 109.447 25.3149C109.713 25.1667 109.921 25.1074 110.039 25.1074C110.188 25.1074 110.277 25.1371 110.365 25.1667C110.425 25.1964 110.514 25.2556 110.573 25.3446C110.632 25.4335 110.721 25.5521 110.78 25.6706C110.84 25.7892 110.988 26.1153 111.225 26.6488C111.462 27.1824 111.729 27.7753 112.025 28.3681C112.292 28.9906 112.559 29.5538 112.826 30.0874C113.063 30.6209 113.211 30.9174 113.241 31.0063L115.612 25.8188C115.671 25.6706 115.731 25.5521 115.79 25.4631C115.938 25.2556 116.116 25.1371 116.324 25.1371C116.531 25.1371 116.679 25.1667 116.916 25.3149Z" fill="#74CCD8" />
                    <path d="M59.647 26.2331C59.647 26.0553 59.647 25.9071 59.6767 25.8182C59.7063 25.7292 59.736 25.6107 59.7952 25.4921C59.9138 25.2846 60.2102 25.166 60.7142 25.166C61.2774 25.166 61.6034 25.3142 61.6924 25.6107C61.722 25.7589 61.7517 25.9367 61.7517 26.2331V32.8138C61.7517 32.9916 61.7517 33.1399 61.722 33.2288C61.722 33.3177 61.6627 33.4066 61.6034 33.5252C61.4849 33.7327 61.1884 33.8513 60.6845 33.8513C60.1213 33.8513 59.7952 33.7031 59.7063 33.4066C59.647 33.2881 59.647 33.0806 59.647 32.8138V26.2331Z" fill="#74CCD8" />
                    <path d="M67.2356 29.4933C68.4509 30.6493 69.3106 31.5386 69.8145 32.1018C70.0813 32.3982 70.1998 32.6354 70.1998 32.8429C70.1998 33.0504 70.0516 33.2875 69.7255 33.5543C69.3995 33.8211 69.1623 33.9693 68.9548 33.9693C68.7473 33.9693 68.5102 33.7914 68.2138 33.4654L65.6052 30.5011V32.8132C65.6052 32.9911 65.6052 33.1393 65.5756 33.2282C65.5756 33.3171 65.5163 33.4061 65.457 33.5246C65.3385 33.7321 65.042 33.8507 64.5381 33.8507C63.9749 33.8507 63.6488 33.7025 63.5599 33.4061C63.5006 33.2875 63.5006 33.08 63.5006 32.8132V26.2326C63.5006 26.0547 63.5006 25.9065 63.5303 25.8176C63.5599 25.7287 63.5895 25.6101 63.6488 25.4915C63.7674 25.284 64.0638 25.1654 64.5677 25.1654C65.131 25.1654 65.457 25.3137 65.5459 25.6101C65.5756 25.7583 65.6052 25.9362 65.6052 26.2326V28.4854C66.6724 27.2701 67.5616 26.2919 68.2138 25.5212C68.4806 25.1951 68.7177 25.0469 68.9252 25.0469C69.1327 25.0469 69.3995 25.1951 69.6959 25.4619C69.9923 25.7287 70.1702 25.9658 70.1702 26.1733C70.1702 26.3808 70.0516 26.6179 69.8145 26.8847C69.3698 27.4183 68.6584 28.1297 67.6802 29.0783L67.2356 29.4933Z" fill="#74CCD8" />
                    <path d="M76.9287 25.7885L80.1301 32.3988C80.2783 32.6656 80.3375 32.8731 80.3375 32.9916C80.3375 33.2881 80.1004 33.5252 79.6558 33.7624C79.389 33.9106 79.1815 33.9699 79.0333 33.9699C78.8851 33.9699 78.7665 33.9402 78.6479 33.8513C78.559 33.792 78.4701 33.7031 78.4404 33.6141C78.4108 33.5252 78.3219 33.4066 78.2626 33.2584L77.6401 31.9838H74.3498L73.7273 33.2584C73.6383 33.4066 73.579 33.5252 73.5494 33.6141C73.5198 33.7031 73.4308 33.7624 73.3419 33.8216C73.253 33.9106 73.1048 33.9402 72.9566 33.9402C72.8083 33.9402 72.6008 33.8809 72.3341 33.7327C71.8894 33.5252 71.6523 33.2584 71.6523 32.962C71.6523 32.8138 71.7116 32.6359 71.8598 32.3692L75.0019 25.7885C75.0908 25.6107 75.2094 25.4624 75.3872 25.3439C75.5651 25.2253 75.743 25.166 75.9505 25.166C76.3951 25.166 76.7212 25.3735 76.9287 25.7885ZM75.9505 28.6342L75.1797 30.2645H76.7508L75.9505 28.6342Z" fill="#74CCD8" />
                    <path d="M83.8947 32.1024H87.1257C87.3925 32.1024 87.5703 32.132 87.6889 32.1913C87.8075 32.2506 87.8964 32.3395 87.926 32.4581C87.9557 32.5767 87.9853 32.7545 87.9853 32.962C87.9853 33.1695 87.9557 33.3474 87.926 33.4659C87.8964 33.5845 87.8075 33.6734 87.7185 33.7327C87.5703 33.8216 87.3628 33.8513 87.0961 33.8513H82.8275C82.2643 33.8513 81.9382 33.7031 81.8493 33.4066C81.79 33.2881 81.79 33.0806 81.79 32.8138V26.2331C81.79 26.0553 81.79 25.9071 81.8197 25.8182C81.8493 25.7292 81.879 25.6107 81.9383 25.4921C82.0568 25.2846 82.3532 25.166 82.8572 25.166C83.4204 25.166 83.7464 25.3142 83.8354 25.6107C83.865 25.7589 83.8947 25.9367 83.8947 26.2331V32.1024Z" fill="#74CCD8" />
                    <path d="M104.615 32.1024H107.846C108.113 32.1024 108.29 32.132 108.409 32.1913C108.528 32.2506 108.617 32.3395 108.646 32.4581C108.676 32.5767 108.705 32.7545 108.705 32.962C108.705 33.1695 108.676 33.3474 108.646 33.4659C108.617 33.5845 108.528 33.6734 108.439 33.7327C108.29 33.8216 108.083 33.8513 107.816 33.8513H103.548C102.984 33.8513 102.658 33.7031 102.569 33.4066C102.51 33.2881 102.51 33.0806 102.51 32.8138V26.2331C102.51 26.0553 102.51 25.9071 102.54 25.8182C102.569 25.7292 102.599 25.6107 102.658 25.4921C102.777 25.2846 103.073 25.166 103.577 25.166C104.141 25.166 104.467 25.3142 104.556 25.6107C104.585 25.7589 104.615 25.9367 104.615 26.2331V32.1024Z" fill="#74CCD8" />
                    <path d="M89.7046 32.6357C89.4971 32.3689 89.4081 32.1614 89.4081 31.9539C89.4081 31.7464 89.586 31.4797 89.9121 31.1536C90.1196 30.9757 90.3271 30.8572 90.5346 30.8572C90.7421 30.8572 91.0681 31.0647 91.4535 31.45C91.572 31.5982 91.7203 31.7168 91.9278 31.8354C92.1353 31.9539 92.3131 32.0132 92.491 32.0132C93.232 32.0132 93.5877 31.7168 93.5877 31.1239C93.5877 30.9461 93.4988 30.7979 93.2913 30.6793C93.0838 30.5607 92.8467 30.4718 92.5503 30.4125C92.2538 30.3532 91.9278 30.2643 91.5721 30.1457C91.2163 30.0272 90.8903 29.879 90.5938 29.7011C90.2974 29.5232 90.0306 29.2861 89.8528 28.9008C89.6453 28.545 89.5564 28.1004 89.5564 27.5965C89.5564 26.9147 89.8231 26.2922 90.3271 25.7883C90.831 25.2844 91.5424 25.0176 92.4317 25.0176C92.906 25.0176 93.3506 25.0769 93.736 25.1954C94.1213 25.314 94.3881 25.4326 94.5363 25.5808L94.8327 25.8179C95.0699 26.0551 95.1884 26.2329 95.1884 26.4108C95.1884 26.559 95.0995 26.7961 94.892 27.0629C94.6252 27.4483 94.3585 27.6558 94.062 27.6558C93.8842 27.6558 93.6767 27.5668 93.4395 27.4186C93.4099 27.389 93.3802 27.3593 93.2913 27.3001C93.232 27.2408 93.1727 27.1815 93.1135 27.1518C92.9356 27.0629 92.7281 27.0036 92.491 27.0036C92.2242 27.0036 92.0167 27.0629 91.8388 27.1815C91.661 27.3001 91.5721 27.4779 91.5721 27.6854C91.5721 27.8929 91.661 28.0708 91.8685 28.219C92.076 28.3672 92.3131 28.4561 92.6095 28.4858C92.906 28.545 93.232 28.6043 93.5877 28.6933C93.9435 28.7822 94.2695 28.9008 94.5659 29.049C94.8624 29.1972 95.1292 29.4343 95.307 29.79C95.5145 30.1457 95.6034 30.5607 95.6034 31.0943C95.6034 31.5982 95.5145 32.0725 95.307 32.4579C95.0995 32.8432 94.8327 33.1396 94.5067 33.3768C93.8545 33.7918 93.1728 33.9993 92.4613 33.9993C92.076 33.9993 91.7499 33.94 91.3942 33.8511C91.0681 33.7621 90.8013 33.6436 90.5938 33.525C90.1788 33.2582 89.8824 33.0211 89.7046 32.7839V32.6357Z" fill="#74CCD8" />
                    <path d="M98.8938 33.8808C99.9088 33.8808 100.732 33.0579 100.732 32.0429C100.732 31.0279 99.9088 30.2051 98.8938 30.2051C97.8788 30.2051 97.056 31.0279 97.056 32.0429C97.056 33.0579 97.8788 33.8808 98.8938 33.8808Z" fill="#74CCD8" />
                    <path d="M37.3855 3.14244C37.3855 4.74314 36.0812 5.78062 34.4805 5.78062H29.5302V9.69344C27.9295 8.24096 26.5659 7.88525 24.3724 8.0631V0.474609H34.4805C36.0812 0.474609 37.3855 1.5121 37.3855 3.14244Z" fill="#74CCD8" />
                    <path d="M18.3549 1.51153V10.4339C15.9835 8.92216 14.0568 7.76611 11.8632 7.76611H11.8039C6.55719 7.76611 2.31831 12.3903 2.31831 17.7853C2.31831 17.9335 2.31831 18.1706 2.31831 18.3189C1.28082 16.2735 0.658325 14.0503 0.658325 11.6493C0.658325 4.17936 5.87541 0.355469 12.6043 0.355469H12.6932C14.2939 0.355469 17.1692 0.918677 18.3549 1.51153Z" fill="url(#paint5_linear_888_15429)" />
                    <path d="M32.1387 18.1703C32.1387 20.4231 31.0123 22.4981 29.382 24.2767C28.463 23.7135 27.3663 23.3874 26.2102 23.3874C22.831 23.3874 20.1038 26.1145 20.1038 29.4938C20.1038 29.9088 20.1335 30.2941 20.2224 30.6795C18.9774 31.2723 18.1474 31.5984 18.1474 31.5984C18.1474 31.5984 17.436 31.302 16.3689 30.798C16.4578 30.383 16.5171 29.9384 16.5171 29.4938C16.5171 26.1145 13.79 23.3874 10.4107 23.3874C9.16574 23.3874 8.00968 23.7431 7.06112 24.3953C5.37149 22.5871 4.18579 20.3935 4.18579 18.111C4.18579 13.7832 7.59468 10.1668 11.8039 10.1668H11.8632C14.4125 10.1668 16.7839 11.5897 18.1771 13.7832C19.5999 11.56 22.001 9.92969 24.5502 9.92969C28.7298 9.95933 32.1387 13.8425 32.1387 18.1703Z" fill="url(#paint6_linear_888_15429)" />
                    <path d="M10.1736 33.7336C12.5146 33.7336 14.4125 31.8358 14.4125 29.4947C14.4125 27.1537 12.5146 25.2559 10.1736 25.2559C7.83251 25.2559 5.93469 27.1537 5.93469 29.4947C5.93469 31.8358 7.83251 33.7336 10.1736 33.7336Z" fill="#74CCD8" />
                    <path d="M26.2102 33.7336C28.5513 33.7336 30.4491 31.8358 30.4491 29.4947C30.4491 27.1537 28.5513 25.2559 26.2102 25.2559C23.8691 25.2559 21.9713 27.1537 21.9713 29.4947C21.9713 31.8358 23.8691 33.7336 26.2102 33.7336Z" fill="#74CCD8" />
                    <defs>
                        <linearGradient id="paint0_linear_888_15429" x1="47.1527" y1="4.17969" x2="47.1527" y2="20.0977" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_888_15429" x1="77.5363" y1="4.20898" x2="77.5363" y2="20.2456" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_888_15429" x1="93.395" y1="4.23828" x2="93.395" y2="20.1563" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_888_15429" x1="110.603" y1="4.20898" x2="110.603" y2="20.3938" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_888_15429" x1="62.3593" y1="4.20898" x2="62.3593" y2="20.0974" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_888_15429" x1="9.50663" y1="0.355469" x2="9.50663" y2="18.3189" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_888_15429" x1="18.1623" y1="9.92969" x2="18.1623" y2="31.5984" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ED9BC1" />
                            <stop offset="1" stopColor="#ED9BB9" />
                        </linearGradient>
                    </defs>
                </svg>
            )

        case 'Email':
            return (
                <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6099 7.10284L20.4744 11.4444V2.58008L13.6099 7.10284Z" fill="#686877" />
                    <path d="M0.110779 2.58008V11.4444L6.97536 7.10284L0.110779 2.58008Z" fill="#686877" />
                    <path d="M19.2016 0H1.38345C0.748105 0 0.245123 0.474473 0.149414 1.08335L10.2925 7.76465L20.4357 1.08131C20.34 0.472436 19.837 0 19.2016 0Z" fill="#686877" />
                    <path d="M12.443 7.87305L10.6429 9.06025C10.535 9.12948 10.4148 9.1641 10.2926 9.1641C10.1705 9.1641 10.0503 9.12948 9.94239 9.06025L8.14224 7.87305L0.15155 12.9253C0.249296 13.5301 0.750241 14.0005 1.38355 14.0005H19.2017C19.835 14.0005 20.336 13.5301 20.4337 12.9253L12.443 7.87305Z" fill="#686877" />
                </svg>
            )

        case 'Phone_icon':
            return (
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.25123 9.36811C5.72129 7.83817 5.37685 6.31143 5.29835 5.69786C5.27592 5.52964 5.3352 5.35983 5.45535 5.23807L6.69052 4.00291C6.87155 3.82188 6.90359 3.53671 6.76902 3.32044L4.79852 0.260557C4.64793 0.0186499 4.33713 -0.069462 4.08081 0.0587007L0.923201 1.54539C0.718141 1.64471 0.594784 1.86419 0.620417 2.09328C0.787028 3.66648 1.4711 7.53699 5.27592 11.3418C9.08075 15.1466 12.9481 15.8323 14.5245 15.9973C14.7535 16.0198 14.9714 15.8996 15.0724 15.6945L16.5622 12.5305C16.6904 12.2774 16.6023 11.9666 16.362 11.8176L13.3021 9.84872C13.0826 9.71095 12.8007 9.74619 12.6196 9.92722L11.3845 11.1624C11.2659 11.2841 11.0929 11.3402 10.9247 11.3194C10.3111 11.2409 8.78117 10.8981 7.25123 9.36811Z" fill="#686877" />
                </svg>
            )

        case 'Burger_panel':
            return (
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.293213" width="19.9871" height="2" rx="1" fill="#090F24" />
                    <rect x="0.293213" y="8" width="19.9871" height="2" rx="1" fill="#090F24" />
                    <rect x="0.293213" y="16" width="19.9871" height="2" rx="1" fill="#090F24" />
                </svg>
            )

        case 'Search_icon':
            return (
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1288 10.0629H11.402L11.1506 9.81132C12.0465 8.77303 12.5859 7.42367 12.5859 5.94627C12.5859 2.66209 9.92551 0 6.64349 0C3.36147 0 0.70105 2.66209 0.70105 5.94627C0.70105 9.23045 3.36143 11.8925 6.64349 11.8925C8.11994 11.8925 9.46842 11.3528 10.506 10.4608L10.7575 10.7124V11.4351L15.3285 16L16.6907 14.6369L12.1288 10.0629ZM6.64349 10.0629C4.37167 10.0629 2.5295 8.21955 2.5295 5.94627C2.5295 3.67299 4.37167 1.82963 6.64349 1.82963C8.91531 1.82963 10.7575 3.67299 10.7575 5.94627C10.7575 8.21955 8.91531 10.0629 6.64349 10.0629Z" fill="#090F24" />
                </svg>
            )

        case 'Account_menu':
            return (
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g mask="url(#mask0_888_15477)">
                        <circle cx="17.5133" cy="17.9238" r="17" fill="#B7B8C5" />
                        <path d="M17.5133 17.7269C19.5084 17.7269 21.1258 15.7624 21.1258 13.339C21.1258 10.9157 20.5948 8.95117 17.5133 8.95117C14.4319 8.95117 13.9008 10.9157 13.9008 13.339C13.9008 15.7624 15.5182 17.7269 17.5133 17.7269Z" fill="#F4F5F9" />
                        <path d="M10.69 24.4275C10.6894 24.2797 10.6888 24.3859 10.69 24.4275V24.4275Z" fill="#F4F5F9" />
                        <path d="M24.3363 24.5432C24.3383 24.5025 24.337 24.261 24.3363 24.5432V24.5432Z" fill="#F4F5F9" />
                        <path d="M24.3285 24.2503C24.2616 20.0288 23.7103 18.8259 19.4913 18.0645C19.4913 18.0645 18.8974 18.8212 17.5132 18.8212C16.1289 18.8212 15.535 18.0645 15.535 18.0645C11.362 18.8176 10.7771 20.0026 10.7002 24.1131C10.6939 24.4488 10.691 24.4664 10.6899 24.4275C10.6901 24.5005 10.6904 24.6355 10.6904 24.871C10.6904 24.871 11.6949 26.8959 17.5132 26.8959C23.3314 26.8959 24.3359 24.871 24.3359 24.871C24.3359 24.7197 24.336 24.6145 24.3362 24.5429C24.335 24.567 24.3328 24.5203 24.3285 24.2503Z" fill="#F4F5F9" />
                    </g>
                </svg>
            )

        case 'Liked':
            return (
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0493 18.8377C13.0435 18.8411 13.0378 18.8444 13.0321 18.8477C13.0258 18.844 13.0195 18.8403 13.0131 18.8365C12.6886 18.6447 12.2225 18.362 11.6621 18.0019C10.5393 17.2804 9.0476 16.254 7.56084 15.0301C6.06914 13.8021 4.61221 12.3995 3.53578 10.9304C2.45117 9.44999 1.82178 7.99624 1.82178 6.6451C1.82178 3.52693 4.34775 1.0002 7.4624 1.0002V1.00023L7.4702 1.00017C9.3735 0.985318 11.1532 1.94324 12.1899 3.54117L13.0239 4.82666L13.8648 3.54564C14.9102 1.95306 16.6878 0.996001 18.5915 1.0002C21.7011 1.016 24.2193 3.53449 24.2357 6.64758C24.235 8.0253 23.6031 9.49128 22.5209 10.9727C21.4453 12.4451 19.9894 13.844 18.4986 15.0652C17.0126 16.2825 15.5217 17.2994 14.3995 18.0131C13.8394 18.3693 13.3735 18.6484 13.0493 18.8377Z" stroke="#B7B8C5" strokeWidth="2" />
                </svg>
            )

        case 'Store':
            return (
                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.443 4.57928C28.2447 5.35106 28.0317 6.1155 27.8407 6.88729C26.9886 10.2832 26.1439 13.6864 25.2918 17.0822C25.2771 17.1557 25.2477 17.2219 25.2257 17.3027C20.3482 17.3027 15.478 17.3027 10.5564 17.3027C10.7768 18.1774 10.9825 19.0227 11.2029 19.9048C11.313 19.9048 11.4232 19.9048 11.5261 19.9048C15.1254 19.9048 18.7248 19.9048 22.3241 19.9048C23.852 19.9048 25.0641 20.875 25.3799 22.3304C25.7399 23.9842 24.616 25.6454 22.9265 25.9468C21.2737 26.2408 19.6503 25.0794 19.4006 23.433C19.3124 22.867 19.3932 22.323 19.5916 21.7644C17.3511 21.7644 15.1328 21.7644 12.8777 21.7644C13.267 22.8817 13.1568 23.9328 12.4075 24.8736C11.9374 25.4617 11.313 25.8218 10.5711 25.9541C9.07997 26.2187 7.62554 25.3146 7.14807 23.8593C6.74406 22.6318 7.1848 20.6472 9.31503 19.9709C7.80918 13.9436 6.30333 7.91634 4.79747 1.87434C3.26224 1.87434 1.74904 1.87434 0.23584 1.87434C0.23584 1.24956 0.23584 0.624781 0.23584 0C0.346024 0.00735036 0.456209 0.0220511 0.566393 0.0220511C2.37342 0.0220511 4.18044 0.0294014 5.98746 0.0147007C6.17845 0.0147007 6.25925 0.0735036 6.30333 0.257263C6.40617 0.712985 6.5237 1.16871 6.63388 1.61708C6.86894 2.55793 7.104 3.49877 7.34641 4.45432C14.3835 4.45432 21.4133 4.45432 28.443 4.45432C28.443 4.50577 28.443 4.54252 28.443 4.57928ZM7.84591 6.30661C7.84591 6.37276 7.83122 6.40216 7.83856 6.42422C8.1177 7.55617 8.39683 8.68078 8.68331 9.80538C8.698 9.87154 8.83757 9.95239 8.91837 9.95239C9.49867 9.96709 10.0716 9.95974 10.6519 9.95974C10.9164 9.95974 11.1808 9.95974 11.46 9.95974C11.313 8.76163 11.1735 7.59292 11.0192 6.43157C11.0119 6.38011 10.909 6.30661 10.8576 6.30661C9.85861 6.30661 8.8596 6.30661 7.84591 6.30661ZM17.9021 6.32131C17.9021 7.54147 17.9021 8.73958 17.9021 9.95239C18.8129 9.95239 19.7091 9.95239 20.62 9.95239C20.7742 8.73958 20.9211 7.54147 21.0754 6.32131C20.0029 6.32131 18.9672 6.32131 17.9021 6.32131ZM12.8997 6.32866C12.885 6.36541 12.8777 6.38011 12.8777 6.39481C13.0172 7.53412 13.1568 8.67343 13.3037 9.81273C13.3111 9.87154 13.4433 9.96709 13.5241 9.96709C14.0677 9.98179 14.6039 9.97444 15.1475 9.97444C15.4413 9.97444 15.7278 9.97444 16.0289 9.97444C16.0289 8.73958 16.0289 7.54147 16.0289 6.32866C14.9785 6.32866 13.9354 6.32866 12.8997 6.32866ZM22.4711 9.96709C23.3672 9.96709 24.2046 9.97444 25.0494 9.95974C25.1081 9.95974 25.2036 9.82743 25.2257 9.74658C25.3726 9.18795 25.5048 8.62932 25.6444 8.0707C25.7839 7.49737 25.9308 6.92404 26.0778 6.32866C25.0126 6.32866 23.9769 6.32866 22.9265 6.32866C22.7796 7.52677 22.6253 8.72488 22.4711 9.96709ZM12.1504 15.4578C11.9962 14.2156 11.8419 13.0175 11.695 11.8194C10.8503 11.8194 10.0349 11.8194 9.18281 11.8194C9.47664 13.0028 9.76312 14.1641 10.0643 15.3329C10.079 15.3917 10.1745 15.4578 10.2406 15.4578C10.8576 15.4652 11.482 15.4578 12.1504 15.4578ZM17.8874 11.8194C17.8874 13.0028 17.8874 14.1568 17.8947 15.3108C17.8947 15.3623 18.0049 15.4505 18.0637 15.4505C18.6293 15.4578 19.2022 15.4578 19.7679 15.4505C19.8266 15.4505 19.9368 15.3623 19.9442 15.3035C20.0984 14.1494 20.238 12.9954 20.3849 11.8194C19.5548 11.8194 18.7395 11.8194 17.8874 11.8194ZM13.5535 11.812C13.7077 13.0469 13.862 14.245 14.0089 15.4358C14.7067 15.4358 15.3752 15.4358 16.0289 15.4358C16.0289 14.2156 16.0289 13.0175 16.0289 11.812C15.2062 11.812 14.3982 11.812 13.5535 11.812ZM22.2433 11.812C22.0891 13.0322 21.9422 14.2303 21.7879 15.4578C22.4049 15.4578 22.9926 15.4505 23.5729 15.4652C23.7639 15.4725 23.8226 15.3917 23.8594 15.2226C24.0944 14.245 24.3442 13.2674 24.5866 12.2898C24.6233 12.1354 24.66 11.9811 24.6968 11.812C23.8667 11.812 23.0734 11.812 22.2433 11.812ZM11.2616 22.9552C11.2616 22.2863 10.7254 21.7497 10.0569 21.7497C9.38849 21.7497 8.85226 22.301 8.8596 22.9625C8.86695 23.6167 9.39584 24.1459 10.0496 24.1533C10.718 24.1533 11.2543 23.6241 11.2616 22.9552ZM23.6023 22.9625C23.6023 22.2936 23.0734 21.7497 22.4049 21.7497C21.7365 21.7497 21.2003 22.2863 21.2003 22.9552C21.2003 23.6167 21.7291 24.1459 22.3829 24.1533C23.0587 24.1533 23.5949 23.6314 23.6023 22.9625Z" fill="#B7B8C5" />
                </svg>
            )

        case 'Whatsup_icon':
            return (
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1616 2.31682C12.6473 0.848248 10.6588 0.0253906 8.53877 0.0253906C2.39877 0.0253906 -1.40695 6.64253 1.62162 11.9168L0.495911 16.0254L4.73305 14.9454C6.59305 15.9397 8.06163 15.854 8.53877 15.8968C15.6302 15.8968 19.1331 7.33396 14.1616 2.31682Z" fill="#ECEFF1" />
                    <path d="M8.53877 14.5107C6.41877 14.5107 5.03592 13.5164 4.90734 13.4307L2.39877 14.0792L3.0902 11.7021L2.91592 11.4421C2.2702 10.4021 1.92163 9.19352 1.92163 7.93923C1.92163 2.05923 9.05592 -0.83791 13.2073 3.2678C17.3588 7.37352 14.4645 14.5107 8.53877 14.5107Z" fill="#4CAF50" />
                    <path d="M12.1702 9.58246V9.62532C11.9531 9.5396 11.0016 9.06246 10.8302 8.97675C10.4416 8.84818 10.5274 8.93389 9.75021 9.84246C9.62164 9.97103 9.53307 9.97103 9.31878 9.88532C9.10164 9.7996 8.49592 9.58246 7.71878 8.89103C7.11307 8.37103 6.72449 7.72246 6.59307 7.50818C6.37592 7.16246 6.81021 7.1196 7.19878 6.42818C7.28449 6.2996 7.24164 6.16818 7.19878 6.08246C7.15592 5.99675 6.76735 5.00246 6.59307 4.61103C6.41878 4.22246 6.24735 4.26532 6.16164 4.26532C5.77307 4.22246 5.51307 4.22246 5.25307 4.48246C4.17307 5.65103 4.43021 6.90532 5.38164 8.20246C7.19878 10.5796 8.15021 11.0139 9.92164 11.6196C10.3959 11.7482 10.8302 11.7482 11.1759 11.7053C11.5645 11.6625 12.3445 11.231 12.5159 10.7539C12.6874 10.2767 12.6902 9.88818 12.6445 9.80246C12.4731 9.71103 12.3445 9.66818 12.1702 9.58246Z" fill="#FAFAFA" />
                </svg>
            )

        case 'Messenger_icon':
            return (
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49121 0.0253906C4.07321 0.0253906 0.491211 3.34139 0.491211 7.43239C0.491211 9.76339 1.65421 11.8424 3.47221 13.2004V16.0254L6.19621 14.5304C6.92321 14.7314 7.69321 14.8404 8.49121 14.8404C12.9092 14.8404 16.4912 11.5244 16.4912 7.43339C16.4912 3.34239 12.9092 0.0253906 8.49121 0.0253906ZM9.28621 10.0004L7.24921 7.82739L3.27421 10.0004L7.64721 5.35839L9.73421 7.53139L13.6592 5.35839L9.28621 10.0004Z" fill="url(#paint0_linear_933_46014)" />
                    <defs>
                        <linearGradient id="paint0_linear_933_46014" x1="3.78512" y1="15.8543" x2="13.8372" y2="1.99307" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0894FF" />
                            <stop offset="0.534375" stop-color="#B038EA" />
                            <stop offset="1" stop-color="#FF6968" />
                        </linearGradient>
                    </defs>
                </svg>
            )

        case 'wach':
            return (
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.37511 0.0253906C9.79202 0.0253906 10.2089 0.0253906 10.6259 0.0253906C10.9594 0.0681525 11.2972 0.0980859 11.6286 0.155814C14.0189 0.572743 16.0265 1.68669 17.5937 3.53828C19.5757 5.88164 20.339 8.59916 19.8622 11.6288C19.4474 14.2566 18.1368 16.3904 16.018 17.9961C13.8372 19.6488 11.3613 20.2838 8.65031 19.9311C6.65553 19.6724 4.9002 18.8556 3.39502 17.5193C1.6568 15.9756 0.570673 14.0577 0.155894 11.7678C0.0896144 11.3979 0.0511298 11.0238 -0.000183105 10.6496C-0.000183105 10.2327 -0.000183105 9.81573 -0.000183105 9.3988C0.0425776 9.06526 0.0767862 8.72958 0.132375 8.39604C0.485151 6.31567 1.39809 4.51539 2.87975 3.01445C4.37638 1.50068 6.17661 0.549224 8.27616 0.179334C8.63962 0.115191 9.00737 0.0767049 9.37511 0.0253906ZM9.16986 7.72895C9.16986 8.59488 9.17627 9.46081 9.16558 10.3267C9.1613 10.6496 9.27248 10.8976 9.49911 11.1242C10.8247 12.4413 12.1439 13.7648 13.4652 15.084C13.5165 15.1353 13.5657 15.1866 13.6191 15.2337C14.0938 15.642 14.81 15.4197 14.9704 14.8125C15.058 14.4746 14.9426 14.2031 14.7031 13.9658C13.463 12.7278 12.2272 11.4877 10.985 10.254C10.8675 10.1386 10.8247 10.0231 10.8268 9.86277C10.8354 9.35604 10.8311 8.84717 10.8311 8.34045C10.8311 7.26071 10.829 6.17883 10.8332 5.09909C10.8332 4.83183 10.767 4.5945 10.5639 4.4149C10.3009 4.18185 9.99514 4.1284 9.67443 4.26737C9.35373 4.40421 9.17841 4.66292 9.17627 5.01784C9.16772 5.91798 9.16986 6.8224 9.16986 7.72895Z" fill="#686877" />
                </svg>
            )
        default:
            break;
    }
}

export default SVGIcons