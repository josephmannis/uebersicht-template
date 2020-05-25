all :
	@echo "Run \`make widget\` to create the widget zip file."

distclean :
	rm -f ./uebersicht-hacker-news.widget.zip

clean :
	rm -rf ./node_modules

install :
	yarn install --production

zip :
	zip -r ./uebersicht-hacker-news.widget.zip . -x "*.git*" "*.log" Makefile package.json yarn.lock .eslintrc.yml .DS_Store

widget : distclean \
	clean \
	install \
	zip
	@echo "Run \`yarn install\` to re-install any non-production dependencies."
