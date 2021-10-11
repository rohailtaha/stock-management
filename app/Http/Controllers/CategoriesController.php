<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Rules\UniqueCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends Controller
{
    public function index() {
        $categories = Category::where('shop_id', auth()->user()->shop_id)->orderByDesc('created_at')->get();
        $categories->transform(function($category) {
            return $category->requiredFields();
        });
        return response(['status'=>'OK', 'categories' => $categories],  200);
    }

    public function store(Request $request) {
        
        $validator = Validator::make($request->all(), [
            'name' => ['required', new UniqueCategory],
        ]);

        if($this->invalid($validator))  return $this->errorResponse($validator);
        
        $category = Category::create([
            'shop_id' => auth()->user()->shop_id,
            'name' => $request->name,
        ]);

        return response(['category' => $category->requiredFields(), 'status' => 'OK'], 200);
    }

    public function update(Request $request, $id) {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required'
        ]);

        if($this->invalid($validator))  return $this->errorResponse($validator);
        
        Category::where([
            'shop_id' => auth()->user()->shop_id,
            'id' => $id,
        ])->update([ 'name' => $request->name ]);

        $category = Category::where([['shop_id', auth()->user()->shop_id],['id', $id]])->first();
        return response(['category' => $category->requiredFields(), 'status' => 'OK'], 200);
    }

    public function delete($id) {
        Category::where([['shop_id', auth()->user()->shop_id], ['id', $id]])->first()->delete();
        return response(['id' => $id],200);
    }

    private function invalid($validator) {
        return $validator->stopOnFirstFailure()->fails();
    }

    private function errorResponse($validator) {
        $errorMsg = Arr::flatten($validator->errors()->messages())[0];
        return response(['error' => ['msg' => $errorMsg], 'status' => 'ERROR'], 200);
    }

}