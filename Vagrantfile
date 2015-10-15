Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
    v.cpus = 2
  end
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.add_recipe "bootstrap"
    chef.add_recipe "che-mongoDB"
    chef.add_recipe "che-node"
    chef.log_level = :debug
  end
  # MongoDB ports
  #config.vm.network :forwarded_port, guest: 3000, host: 3000
  #config.vm.network :forwarded_port, guest: 27017, host: 27017
  #config.vm.network :forwarded_port, guest: 8080, host: 8080
  #config.vm.network :forwarded_port, guest: 35729, host: 35729
  #config.vm.network :forwarded_port, guest: 48389, host: 48389
  #config.vm.network :forwarded_port, guest: 7000, host: 7000
  #config.vm.network :forwarded_port, guest: 5858, host: 5858
end