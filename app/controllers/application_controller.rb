class ApplicationController < ActionController::Base
  before_action :require_install

  def require_install
    redirect_to install_path unless $is_goose_installed
  end

end
