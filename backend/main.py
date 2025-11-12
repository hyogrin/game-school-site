from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Game School API", version="1.0.0")

# In production, restrict to your Vercel/custom domains
origins = [
    "*",  # DEV ONLY! Replace with e.g. "https://game-school.vercel.app"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MatchRecord(BaseModel):
    season: str
    wins: int
    losses: int
    draws: int = 0

class PlayerStat(BaseModel):
    slug: str
    name: str
    race: str
    winRate: float
    recent: Optional[List[str]] = None

DB_RECORDS = [
    {"season": "2023 Spring", "wins": 18, "losses": 6, "draws": 1},
    {"season": "2023 Summer", "wins": 15, "losses": 9, "draws": 0},
    {"season": "2024 Spring", "wins": 20, "losses": 5, "draws": 0},
]

DB_PLAYER_STATS = {
    "hong-terran": {"slug": "hong-terran", "name": "홍테란", "race": "Terran", "winRate": 72.0, "recent": ["W","W","L","W"]},
    "lee-zerg": {"slug": "lee-zerg", "name": "이저그", "race": "Zerg", "winRate": 66.0, "recent": ["L","W","W"]},
    "park-protoss": {"slug": "park-protoss", "name": "박프로토스", "race": "Protoss", "winRate": 61.0, "recent": ["W","L","W","W"]},
}

@app.get("/health")
def health():
    return {"ok": True}

@app.get("/records", response_model=List[MatchRecord])
def list_records():
    return DB_RECORDS

@app.get("/players/{slug}/stats", response_model=PlayerStat)
def get_player_stats(slug: str):
    data = DB_PLAYER_STATS.get(slug)
    if not data:
        raise HTTPException(status_code=404, detail="Player not found")
    return data

@app.post("/records", response_model=MatchRecord)
def add_record(rec: MatchRecord):
    DB_RECORDS.append(rec.dict())
    return rec
