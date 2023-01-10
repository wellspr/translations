from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import translate

app = FastAPI()

origins = [ 
	"http://localhost:3000",
	"http://localhost:4000",
	"https://translations.deta.dev"
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_methods=["*"],
)

class Translation(BaseModel):
	text: str
	from_code: str
	to_code: str

class Text(BaseModel):
	text: str


@app.get("/")
def read_root():
	languages = translate.languages();
	return {"Welcome to the Translation Project": languages }


@app.get("/translations/languages")
def read_languages():
	return translate.languages();


@app.get("/translations/translate")
def read_translate(text: str, from_code: str, to_code: str):
	print ({
		"term": text, 
		"from_code": from_code, 
		"to_code": to_code
	})
	return translate.translate(text, from_code, to_code) 


@app.post("/translations/translate")
def read_translate(translation: Translation):
	text = translation.text
	from_code = translation.from_code
	to_code = translation.to_code
	return translate.translate(text, from_code, to_code) 


@app.post("/translations/detect")
def read_detect(text: Text):
	return translate.detect(text.text)