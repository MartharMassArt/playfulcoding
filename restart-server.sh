#!/usr/bin/env bash

# restart-dev.sh
set -euo pipefail
# Kill anything on port 3065just in case (optional but handy after crashes)
echo "restarting server..."
lsof -ti:3065 | xargs kill -9 2>/dev/null || true
tmux kill-session -t coding 2>/dev/null || true
tmux new -d -s coding "npm run dev 2>&1 | tee -a .nextdev.log"
echo "[restart-dev] restarted at $(date)"
exit 0
