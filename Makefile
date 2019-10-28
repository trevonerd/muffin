
main_app_folder = mainApp

all: link_react

link_react:
	@echo Symlinking react package to avoid hooks error...
	@npm link ../${main_app_folder}/node_modules/react
	@cd packages/components && npm link ../../../${main_app_folder}/node_modules/react
	@cd packages/logic && npm link ../../../${main_app_folder}/node_modules/react