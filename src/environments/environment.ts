import { Environments } from "@farsiman/angular-fs-identity-server";

export const environment = {
  production:false,
  webApis:{
    transporteApi: 'http://localhost:5204/api'
  },
  auth_config:{
    environment: Environments.Staging,
    client_id:'clientdemo',
    url:'http://localhost:4200',
    api_resources:[
      'http://localhost:5204/api'
    ],
    require_authorization:false,
    public_pages_paths:[],
    public_main_page_path: '/public/landing',
    authenticated_main_page_path: '/public/home'
  }
};
