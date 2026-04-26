#!/usr/bin/env bash
# Find the first unchecked day in PROGRESS.md and print the command to start it.
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PROGRESS="$REPO_ROOT/PROGRESS.md"

if [ ! -f "$PROGRESS" ]; then
  echo "No PROGRESS.md found. Are you in the repo root?"
  exit 1
fi

line=$(grep -n "^- \[ \] \*\*Day" "$PROGRESS" | head -1 | cut -d: -f2-)

if [ -z "$line" ]; then
  echo "🎉  You've completed all 28 days. That's the course."
  echo "See days/day-28-whats-next/ for what's next."
  exit 0
fi

day_num=$(echo "$line" | sed -n -E 's/.*\*\*Day ([0-9]+)\*\*.*/\1/p')
title=$(echo "$line" | sed -n -E 's/^- \[ \] \*\*Day [0-9]+\*\* — (.+) · \[.*/\1/p' | sed 's/ *$//')
slug=$(echo "$line" | sed -n -E 's/.*\[`([^`]+)`\].*/\1/p' | tr -d '/')
range=$(echo "$line" | awk -F'`' '{print $(NF-1)}')

echo "You're on Day $day_num — $title"
echo "Range: $range"
echo ""
echo "Next step:"
echo "    cd days/$slug"
echo "    claude"
echo ""
echo "When you finish, mark Day $day_num done in PROGRESS.md."
