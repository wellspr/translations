from libretranslatepy import LibreTranslateAPI

lt = LibreTranslateAPI("https://translate.argosopentech.com/")


def translate(text, from_code, to_code):
	return lt.translate(text, from_code, to_code)


def detect(text):
	if text:
		return lt.detect(text)
	return ""


def languages():
	return lt.languages()
# [{"code":"en", "name":"English"}]


print(languages())