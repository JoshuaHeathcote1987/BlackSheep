<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

Schema::create('messenger_reactions', function (Blueprint $table) {
    $table->id();
    $table->foreignId('message_id');
    $table->foreignId('user_id');
    $table->text('reaction');
    $table->timestamps();
});
