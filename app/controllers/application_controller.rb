class ApplicationController < ActionController::Base
  before_action :require_install

  def require_install
    if defined?($is_goose_installed) == nil
      $is_goose_installed = Option.exists?(key: "goose_installed_at")
    end
    redirect_to install_path unless $is_goose_installed
  end

  def require_admin_session
      redirect_to login_index_path unless session[:admin]
  end

end
