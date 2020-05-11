describe UsersController, type: :controller do
  it "#new" do
    get :new, params: {}
    expect(response.status).to eq 200
  end

  it "#create" do
    post :create, params: { user: { username: "example@examp.com", password: "apple123" } }
    expect(response.status).to eq 302
  end
end
